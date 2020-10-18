import React, { useState, useContext } from 'react';
import { AuthContext } from './../../auth/Auth';
import { useHistory } from 'react-router-dom';

import styles from './LoginModal.module.scss';

import { axiosInstance as api, extractTokenFromResponse, extractInfoFromToken } from './../../apis';
import Modal from '../Modal';
import Button from '../Button';
import Input from '../Input';

const LoginModal = ({ pageToggler }) => {
  const history = useHistory();
  const { setUser } = useContext(AuthContext);

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
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default LoginModal;
