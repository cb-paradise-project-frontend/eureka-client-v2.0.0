import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

import { AuthContext } from '../../auth/Auth';
import { api, extractTokenFromResponse, extractInfoFromToken } from '../../apis';
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
  margin-bottom: 18px;
  width: 100%;
`;

const Label = styled.div`
  font-size: 13px;
  padding: 0 5px;
`;

const ForgotPswBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 18px;
`;

const LoginModal = ({ pageToggler, setPage }) => {
  const history = useHistory();
  const { setUser } = useContext(AuthContext);
  const form = useForm(FORM);
  const [errorHighlightField, setErrorHighlightField] = useState('');
  const { setNotification } = useContext(FetchContext);

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
    };

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

      setNotification({
        status: 'success',
        message: 'Log in successed'
      })

      history.push('/profile');

      pageToggler();
    } catch (error) {
      console.log(error);
      setNotification({
        status: 'error',
        message: error.response.data.message || 'Invalid account or password',
      });
    }
  }

  return (
    <Modal onRequestClose={pageToggler} >
      <Modal.Header>Log In</Modal.Header>
      <Modal.Content>
        <ModalContainer>
          {fieldList}
          <ForgotPswBtn>
            <Button.Text
              onClick={() => setPage('ForgotPassword')}
            >
              Forgot password?
            </Button.Text>
          </ForgotPswBtn>
          <Button onClick={onLoginWithEmail} >
            Log in
          </Button>
        </ModalContainer>
      </Modal.Content>
      <Modal.Footer>
        <Label>
          Do not have an account yet?
        </Label>
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
