import React, { useState, useContext } from 'react';
import { AuthContext } from './../../auth/Auth';
import { useHistory } from 'react-router-dom';
import useForm from '../../pages/OfferModal/ProfilePage/SubPages/useForm'

import styles from './LoginModal.module.scss';

import { api, extractTokenFromResponse, extractInfoFromToken } from './../../apis';
import Modal from '../Modal';
import Button from '../Button';
import Input from '../Input';
import FORM from './form';

const LoginModal = ({ pageToggler }) => {
  const history = useHistory();
  const { setUser } = useContext(AuthContext);
  const form = useForm(FORM);

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

    return (
      <div className={styles.input_wrapper} >
        <Input
          label={label}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          handleChange={handleChange}
          />
      </div>
    )
  });

  const onLoginWithEmail = async (e) => {
    e.preventDefault();
    // const {email, password} = form;
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
          {fieldList}
          <Button onClick={onLoginWithEmail} >
            Log in
          </Button>
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default LoginModal;



//   // //// Original login form
//   const history = useHistory();
//   const { setUser } = useContext(AuthContext);

//   // const [form, setForm] = useState({
//   //   email: '',
//   //   password: '',
//   // });

//   // const handleChange = (e) => {
//   //   const {name, value} = e.target;
//   //   setForm({
//   //     ...form,
//   //     [name]: value,
//   //   });
//   // }

  // const onLoginWithEmail = async (e) => {
  //   e.preventDefault();
  //   // const {email, password} = form;
  //   try {
  //     const res = await api.post('/users/login', formData);

  //     if (!res) {
  //       pageToggler();
  //     };

  //     await extractTokenFromResponse(res);

  //     const info = extractInfoFromToken();

  //     if (!info.user) {
  //       return;
  //     }

  //     await setUser(info.user);

  //     history.push('/profile');

  //     pageToggler();
  //   } catch (error) {
  //     console.log(error);
  //     pageToggler();
  //   }
  // }

  // return (
  //   <Modal onRequestClose={pageToggler} >
  //     <Modal.Header>Log In</Modal.Header>
  //     <Modal.Content>
  //       <div className={styles.container}>
  //         {fieldList}
  //         <Button onClick={onLoginWithEmail} >
  //           Log in
  //         </Button>
  //       </div>
  //     </Modal.Content>
  //   </Modal>
  // );
// };

