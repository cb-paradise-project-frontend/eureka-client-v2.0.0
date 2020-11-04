import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/Auth';
import { api, extractTokenFromResponse, extractInfoFromToken } from './../../apis';
import useForm from '../../pages/OfferModal/ProfilePage/SubPages/useForm';
import Modal from '../Modal';
import Button from '../Button';
import Input from '../Input';
import FORM from './form';

const ModalContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: column;

`;

const InputWrapper = styled.div`
  display: inline-block;
  margin-bottom: 24px;
  width: ${props => props.width || '100%'};
  vertical-align: top;
  &:nth-child(1) {
    margin-right: 16px;
  }
`;

const FooterLabel = styled.div`
  font-size: 13px;
  padding: 0 5px;
`;

const SignupModal = ({ pageToggler, setPage }) => {
  const history = useHistory();
  const { setUser } = useContext(AuthContext);
  const form = useForm(FORM);
  const [errorHighlightField, setErrorHighlightField] = useState('');

  const {
    getData,
    handleDataChange,
    findEmptyField,
    getErrorMessage,
  } = form;

  const formData = getData();

  const fieldList = Object.keys(FORM).map((key) => {
    const { label, type, placeholder, width } = FORM[key];
    const value = formData[key];
    const handleChange = handleDataChange(key);
    const errorMessage = FORM[key].getErrorMessage && FORM[key].getErrorMessage(value, formData);
    const errorField = (key === errorHighlightField.field ? errorHighlightField.message : null);

    return (
      <InputWrapper key={key} width={width}>
        <Input
          label={label}
          type={type}
          placeholder={placeholder}
          value={value}
          handleChange={handleChange}
          isError={errorMessage || errorField}
          errorMessage={errorMessage || errorField}
        />
      </InputWrapper>
    )
  });

  const error = findEmptyField() || getErrorMessage();

  const onSignUp = async (e) => {
    e.preventDefault();
    console.log('error in onSignUp', error);
    console.log('getErrorMessage in onSignUp', getErrorMessage());

    if (error) {
      setErrorHighlightField({
        field: error.field,
        message: error.message,
      });
      return;
    }

    try {
      const res = await api.post('/users', formData);

      if (!res) {
        pageToggler();
      };

      await extractTokenFromResponse(res);

      const info = extractInfoFromToken();
      if (!info.user) {
        return;
      }

      await setUser(info.user);

      history.push('/profile');

      pageToggler();
    } catch (error) {
      console.log(error);
      pageToggler();
    }
  }

  return (
    <Modal onRequestClose={pageToggler} >
      <Modal.Header>Join us</Modal.Header>
      <Modal.Content>
        <ModalContainer>
          <div>
            {fieldList}
          </div>
          <Button type="submit" onClick={onSignUp}>Sign up</Button>
        </ModalContainer>
      </Modal.Content>
      <Modal.Footer>
        <FooterLabel>
          Already have an account?
        </FooterLabel>
        <Button.Text
          onClick={() => setPage('Login')}
        >
          Login
        </Button.Text>
      </Modal.Footer>
    </Modal>
  );
};

export default SignupModal;
