import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from './../../auth/Auth';
import { useHistory } from 'react-router-dom';
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
  padding-bottom: 24px;
`;

const InputWrapper = styled.div`
  margin-bottom: 24px;
  width: 100%;
`;

const LoginModal = ({ pageToggler, setPage }) => {
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
    const { label, type, placeholder } = FORM[key];
    const value = formData[key];
    const handleChange = handleDataChange(key);
    const errorMessage = FORM[key].getErrorMessage && FORM[key].getErrorMessage(value);
    const errorField = (key === errorHighlightField.field ? errorHighlightField.message : null);

    return (
      <InputWrapper key={key}>
        <Input
          label={label}
          type={type}
          placeholder={placeholder}
          value={value}
          handleChange={handleChange}
          isError={errorField}
          errorMessage={errorField}
        />
      </InputWrapper>
    )
  });

  const error = findEmptyField() || getErrorMessage();

  const onLoginWithEmail = async (e) => {
    e.preventDefault();

    if (error) {
      console.log('error in login modal', error);
      setErrorHighlightField({
        field: error.field,
        message: error.message,
      });
      return;
    }

    try {
      const res = await api.post('/users/login', formData);

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
      <Modal.Header>Log In</Modal.Header>
      <Modal.Content>
        <ModalContainer>
          {fieldList}
          <Button onClick={onLoginWithEmail} >
            Log in
          </Button>
        </ModalContainer>
      </Modal.Content>
      <Modal.Footer>
        Do not have an account yet?
        <Button.Text
          onClick={() => setPage('SignUp')}
        >
          Sign up now
        </Button.Text>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
