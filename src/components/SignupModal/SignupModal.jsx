import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import styles from './SignupModal.module.scss';
import { AuthContext } from '../../auth/Auth';
import { api, extractTokenFromResponse, extractInfoFromToken } from './../../apis';
import Modal from '../Modal';
import Button from '../Button';
import Input from '../Input';

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

  const [userCredentials, setUserCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    try {
      const { firstName, lastName, email, password } = userCredentials;

      const res = await api.post('/users', { firstName, lastName, email, password });

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
          <InputWrapper>
            <Input
              label="First Name"
              name="firstName"
              type="string"
              placeholder="First Name"
              required
              value={userCredentials.firstname}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Last Name"
              name="lastName"
              type="string"
              placeholder="Last Name"
              required
              value={userCredentials.lastname}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
              required
              value={userCredentials.email}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              required
              value={userCredentials.password}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
              value={userCredentials.confirmPassword}
              onChange={handleChange}
            />
          </InputWrapper>
          <Button type="submit" onClick={onSignUp}>Sign up</Button>
        </ModalContainer>
      </Modal.Content>
    </Modal>
  );
};

export default SignupModal;
