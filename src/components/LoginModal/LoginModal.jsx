import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../auth/Auth';
import { extractTokenFromResponse, extractInfoFromToken, login } from '../../apis';
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
      setErrorHighlightField({
        field: error.field,
        message: error.message,
      });
      return;
    };

    try {
      setLoading(true);

      const res = await login(formData);

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
        message: 'Log in successed'
      });

      pageToggler();

    } catch (error) {
      setLoading(false);

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
          <Button isLoading={loading} onClick={onLoginWithEmail} >
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
