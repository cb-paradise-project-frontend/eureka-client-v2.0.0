import React from 'react';

import styles from './Password.module.scss';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

class Password extends React.Component {
  constructor() {
    super()

    this.state = {
      currentPassword: '',
      newPassword: '',
      repeatPassword: '',
    };
  }

  handleInputChangeCreator = (key) => (event) => {
    const { value } = event.target;

    this.setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  render() {
    const passwordComponent = Object.keys(this.state).map((title) => {
      const value = this.state[title];

      return (
        <Input
          key={title}
          label={title}
          value={value}
          onChange={this.handleInputChangeCreator(title)}
        />
      )
    })
    return (
      <div className={styles.password_wrapper}>
        {passwordComponent}
        <div className={styles.update_btn}>
          <Button>Reset Password</Button>
        </div>
      </div>
    )
  }
}

export default Password;
