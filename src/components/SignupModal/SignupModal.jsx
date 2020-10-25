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
  padding-bottom: 24px;
`;

const InputWrapper = styled.div`
  margin-bottom: 24px;
  width: 100%;
`;

const SignupModal = ({ pageToggler }) => {
  const history = useHistory();
  const { setUser } = useContext(AuthContext);
  const form = useForm(FORM);
  const [errorCleared, setErrorCleared] = useState(false);
  const [errorHightlightField, setErrorHightlightField] = useState('');

  const {
    getData,
    handleDataChange,
    findEmptyField,
    getErrorMessage,
  } = form;

  const formData = getData();

  const fieldList = Object.keys(FORM).map((key) => {
    const { label, name, type, placeholder } = FORM[key];
    const value = formData[key];
    const handleChange = handleDataChange(key);
    const errorMessage = FORM[key].getErrorMessage && FORM[key].getErrorMessage(formData);

    return (
      <InputWrapper key={name}>
        <Input.WithErrorMessage
          label={label}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          handleChange={handleChange}
          isError={errorMessage}
          errorMessage={errorMessage}
          />
      </InputWrapper>
    )
  });

  const error = findEmptyField() || getErrorMessage();

  const onSignUp = async (e) => {
    e.preventDefault();
    console.log('error in onSignUp', error);

    if (error) return;

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
          {fieldList}
          <Button type="submit" onClick={onSignUp}>Sign up</Button>
        </ModalContainer>
      </Modal.Content>
    </Modal>
  );
};

export default SignupModal;
