import React from 'react';
import { withRouter } from 'react-router-dom';
import resetPasswordFromLink from '../../apis/Password/resetPasswordFromLink';

import { password as passwordValidator } from '../../utils/validators/input';
import Button from '../Button';
import Input from '../Input';

import styles from './ReserPassword.module.scss';

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      confirmPassword: '',
      passwordError: 'Password is not valid, password must be 8-16 mixed caps, numbers and special characters',
      confirmPasswordError: 'Password is not match.',
      isPasswordValid: false,
      isConfirmPasswordValid: false,
      isSubmitError: false,
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handlePasswordClick = this.handlePasswordClick.bind(this);
    this.handleConfirmPasswordClick = this.handleConfirmPasswordClick.bind(this);
    this.handleValidPasswordAndSubmit = this.handleValidPasswordAndSubmit.bind(this);
  }

  handlePasswordChange(value) {
    this.setState({
      password: value,
    });
  }

  handleConfirmPasswordChange(value) {
    this.setState({
      confirmPassword: value,
    });
  }

  handlePasswordClick() {
    const { password, isPasswordValid, isSubmitError } = this.state;

    if (!!password && isPasswordValid && !!isSubmitError) {
      this.setState({
        password: '',
      });
    }
  }

  handleConfirmPasswordClick() {
    const {
      confirmPassword,
      isPasswordValid,
      isConfirmPasswordValid,
      isSubmitError,
    } = this.state;

    if (!!confirmPassword && (isPasswordValid || isConfirmPasswordValid) && !!isSubmitError) {
      this.setState({
        confirmPassword: '',
      });
    }
  }

  handleValidPasswordAndSubmit = async () => {
    const { password, confirmPassword } = this.state;
    const passwordValid = passwordValidator(password);
    const confirmPasswordValid = password === confirmPassword;
    const { history } = this.props;
    const token = history.location.search.split('=')[1];

    this.setState({
      isPasswordValid: !passwordValid,
      isConfirmPasswordValid: !confirmPasswordValid,
      isSubmitError: true,
    });
    if (!token) {
      this.props.history.push('/');
    }

    if (passwordValid && confirmPasswordValid) {
      const passwordData = {
        password,
        token,
      };
      console.log('新密码', passwordData);
      const result = await resetPasswordFromLink(passwordData);
      console.log('后端返回', result);
    }
  }

  render() {
    const {
      password,
      confirmPassword,
      isPasswordValid,
      isConfirmPasswordValid,
      passwordError,
      confirmPasswordError,
    } = this.state;

    return (
      <div className={styles.reset_background}>
        <div className={styles.reset_wrapper}>
          <div className={styles.input_wrapper}>
            <Input
              type="password"
              placeholder="enter your new password, 8-16 mixed caps, numbers and special characters."
              label="New Password"
              value={password}
              handleChange={this.handlePasswordChange}
              isError={isPasswordValid}
              errorMessage={passwordError}
              onClick={this.handlePasswordClick}
            />
            <Input
              type="password"
              placeholder="confirm your new password"
              label="Confirm Password"
              value={confirmPassword}
              handleChange={this.handleConfirmPasswordChange}
              isError={isConfirmPasswordValid}
              errorMessage={confirmPasswordError}
              onClick={this.handleConfirmPasswordClick}
            />
          </div>
          <div className={styles.btn_wrapper}>
            <Button onClick={this.handleValidPasswordAndSubmit} color="blue" size="medium">Reset my password</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ResetPassword);
