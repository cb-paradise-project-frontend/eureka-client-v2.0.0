import React from 'react';
import sendResetPasswordLink from '../../apis/Password/sendResetPasswordLink';

import { email as emailValidator } from '../../utils/validators/input';
import Button from '../Button';
import Input from '../Input';
import Modal from '../Modal';

import styles from './ForgotPassword.module.scss';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      error: 'email is invalid, please check your email address please.',
      isError: false,
      touched: false,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleValidEmail = this.handleValidEmail.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
  }

  handleEmailChange(value) {
    this.setState({
      email: value,
    });

    const { touched } = this.state;
    if (touched) {
      this.handleValidEmail();
    }
  }

  handleValidEmail() {
    const { email } = this.state;
    const result = emailValidator(email);

    this.setState({
      isError: !result,
      touched: true,
    });
  }

  handleEmailSubmit = async () => {
    const { email, isError, touched } = this.state;

    this.handleValidEmail();

    if (!isError && !!touched && !!email) {
      const emailData = {
        email,
      };
      // console.log('执行后端操作', emailData);
      const result = await sendResetPasswordLink(emailData);
      console.log('后端返回', result);

      this.props.pageToggler();
    }
  }

  render() {
    const { email, error, isError } = this.state;
    const { pageToggler } = this.props;

    return (
      <Modal onRequestClose={pageToggler} >
        <Modal.Header>
          Forgot Password
        </Modal.Header>
        <Modal.Content>
          <div className={styles.forgot_wrapper}>
            <div className={styles.input_wrapper}>
              <Input
                type="email"
                placeholder="Enter your email address here, please."
                value={email}
                label="Email"
                handleChange={this.handleEmailChange}
                isError={isError}
                errorMessage={error}
              />
            </div>
            <div className={styles.label} >
              A link will be sent to your email address, please click the link to finish validation for resetting your password.
            </div>
            <div className={styles.btn_wrapper} >
              <Button
                onClick={this.handleEmailSubmit}
                color="blue"
                size="medium"
                long
              >
                Send
              </Button>
            </div>
          </div>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ForgotPassword;
