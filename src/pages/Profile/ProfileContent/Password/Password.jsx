import React from 'react';

import styles from './Password.module.scss';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import resetPassword from '../../../../apis/Profile/resetPassword';

class Password extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPassword: '',
      newPassword: '',
      repeatPassword: '',
    };

    this.handleResetPassword = this.handleResetPassword.bind(this);
  }

  handleInputChangeCreator = (key) => (event) => {
    const { value } = event.target;

    this.setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  handleResetPassword = async () => {
    const { currentPassword, newPassword } = this.state;
    const passwords = { currentPassword, newPassword };

    const res = resetPassword(passwords);
    console.log(res);
  }

  render() {
    const passwordComponent = Object.keys(this.state).map((title) => {
      const value = this.state[title];

      return (
        <Input
          key={title}
          label={title}
          value={value}
          type="password"
          onChange={this.handleInputChangeCreator(title)}
        />
      );
    });

    return (
      <div className={styles.password_wrapper}>
        {passwordComponent}
        <div className={styles.update_btn}>
          <Button onClick={this.handleResetPassword}>Reset Password</Button>
        </div>
      </div>
    );
  }
}

export default Password;
