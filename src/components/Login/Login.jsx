import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { signInWithGoogle, auth } from './../../firebase';
import { AuthContext } from './../../auth/Auth';

import styles from './Login.module.scss';

import Modal from './../Modal';
import FormInput from './../FormInput';
import Button from './../Button';
import Overlay from './../Overlay';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  const onLoginWithEmail = (e) => {
    e.preventDefault();
    const {email, password} = form;
    auth.signInWithEmailAndPassword(email, password);
  }

  const onLoginWithGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle();
  }

  useEffect(() => {
    console.log('form', form);
  }, [form]);

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/profile" />;
  }

  return (
    <Overlay>
      <Modal heading="Log in">
        <div className={styles.conatiner}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            handleChange={handleChange}
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            handleChange={handleChange}
          />
          <Button handleSubmit={onLoginWithEmail}>Log in</Button>
          <div className={styles.seperator}>or log in with</div>
          <Button handleSubmit={onLoginWithGoogle} isGoogle>Google</Button>
        </div>
      </Modal>
    </Overlay>
  );
}

export default Login;
