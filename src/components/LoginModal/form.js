import { email } from '../../utils/validators/input';

const FORM = {
  email: {
    label: 'Email',
    type: 'email',
    placeHolder: 'Email',
    getErrorMessage: (value) => (
      value && !email(value) && 'Your email is invalid'
    ),
  },
  password: {
    label: 'Password',
    type: 'password',
    placeHolder: 'Password',
  },
};

export default FORM;
