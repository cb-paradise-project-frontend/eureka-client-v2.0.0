import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './SignupModal.module.scss';

import { AuthContext } from '../../auth/Auth';
import { api } from './../../apis';
import Modal from '../Modal';
import Button from '../Button';
import Input from '../Input';

const SignupModal = ({ pageToggler }) => {
  const history = useHistory();

  const [userCredentials, setUserCredentials] = useState({
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
    const { email, password } = userCredentials;
    try {
      const res = await api.post('/users', {email, password});
      const token = res.headers['x-auth-token'];
      console.log(token);
      if (token) {
        localStorage.setItem('token', token);
      }
      history.push('/profile');
      pageToggler();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(userCredentials);
  }, [userCredentials]);

  return (
    <Modal onRequestClose={pageToggler} >
      <Modal.Header>Join us</Modal.Header>
      <Modal.Content>
        <form className={styles.container}>
          <div className={styles.input_wrapper} >
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
              required
              value={userCredentials.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_wrapper} >
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              required
              value={userCredentials.password}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_wrapper} >
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
              value={userCredentials.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" onClick={onSignUp}>Sign up</Button>
        </form>
      </Modal.Content>
    </Modal>
  );
};

export default SignupModal;
