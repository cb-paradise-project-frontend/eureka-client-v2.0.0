import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { auth } from '../../firebase';
import { AuthContext } from '../../auth/Auth';

import styles from './Signup.module.scss';

import Modal from '../Modal';
import FormInput from '../FormInput';
import Button from '../Button';

const Signup = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value
    });
  }

  const onSignUp = async (e) => {
    e.preventDefault();
    const {email, password} = userCredentials;
    auth.createUserWithEmailAndPassword(email, password)
    .then((u) => {console.log(u)})
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    console.log(userCredentials);
  }, [userCredentials]);

  const { currentUser } = useContext(AuthContext);
  if (currentUser)  {
    return (<Redirect to="/profile" />)
  }

  return (
    <Modal heading="Sign up">
      <form className={styles.conatiner}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          required
          value={userCredentials.email}
          handleChange={handleChange}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          required
          value={userCredentials.password}
          handleChange={handleChange}
        />
        <FormInput
          label="Comfirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Comfirm Password"
          required
          value={userCredentials.confirmPassword}
          handleChange={handleChange}
        />
        <Button type="submit" handleSubmit={onSignUp}>Sign up</Button>
      </form>
    </Modal>
  );
}

export default Signup;
