import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../../firebase';

import styles from './SignupModal.module.scss';

import { AuthContext } from '../../auth/Auth';
import Modal from '../Modal';
import Button from '../Button';
import Input from '../Input';

const SignupModal = ({ pageToggler }) => {
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
    auth.createUserWithEmailAndPassword(email, password)
      .then((u) => { console.log(u); })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    console.log(userCredentials);
  }, [userCredentials]);

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    console.log(currentUser);
    return (<Redirect to="/profile" />);
  }

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
