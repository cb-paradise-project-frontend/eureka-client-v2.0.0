import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../auth/Auth';
import { extractTokenFromResponse, extractInfoFromToken, signup } from '../../apis';
import useForm from '../../hooks/useForm';
import Modal from '../Modal';
import Button from '../Button';
import Input from '../Input';
import FORM from './form';
import { FetchContext } from '../../apis/Fetch';

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

const Label = styled.div`
  font-size: 13px;
  padding: 0 5px;
`;

const SignupModal = ({ pageToggler, setPage }) => {
  const { setUser } = useContext(AuthContext);
  const form = useForm(FORM);
  const [errorHighlightField, setErrorHighlightField] = useState('');
  const { loading, setLoading, setNotification } = useContext(FetchContext);

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

    if (error) {
      setErrorHighlightField({
        field: error.field,
        message: error.message,
      });
      return;
    }

    try {
      setLoading(true);

      const res = await signup(formData);

      if (!res) {
        pageToggler();
      };

      await extractTokenFromResponse(res);

      const info = extractInfoFromToken();
      if (!info.user) {
        return;
      }

      await setUser(info.user);

      setLoading(false);

      setNotification({
        status: 'success',
        message: 'Sign up successed'
      })

      pageToggler();
    } catch (error) {
      setLoading(false);

      setNotification({
        status: 'error',
        message: error.response.data.message,
      });
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
          <Button isLoading={loading} type="submit" onClick={onSignUp}>Sign up</Button>
        </ModalContainer>
      </Modal.Content>
      <Modal.Footer>
        <Label>
          Already have an account?
        </Label>
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
