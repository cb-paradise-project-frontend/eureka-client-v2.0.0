import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { signInWithGoogle } from '../../firebase';

import styles from './LoginModal.module.scss';

import { AuthContext } from '../../auth/Auth';
import { api } from './../../apis';
import Modal from '../Modal';
import Button from '../Button';
import Input from '../Input';

const LoginModal = ({ pageToggler }) => {
  const history = useHistory();

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

  const onLoginWithEmail = async (e) => {
    e.preventDefault();
    const {email, password} = form;
    try {
      const res = await api.post('/users/login', {email, password});
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

  const onLoginWithGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle();
  }

  useEffect(() => {
    console.log('form', form);
  }, [form]);

  // const { currentUser } = useContext(AuthContext);

  // if (currentUser) {
  //   return <Redirect to="/profile" />;
  // }

  return (
    <Modal onRequestClose={pageToggler} >
      <Modal.Header>Log In</Modal.Header>
      <Modal.Content>
        <div className={styles.container}>
          <div className={styles.input_wrapper} >
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_wrapper} >
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <Button onClick={onLoginWithEmail} >
            Log in
          </Button>
          <div className={styles.separator} >
            or log in with
          </div>
          <Button
            onClick={onLoginWithGoogle}
            color={'blue'}
          >
            Google
          </Button>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default LoginModal;
