import { email } from '../../utils/validators/input';

const FORM = {
  email: {
    label: 'Email',
    type: 'email',
    placeholder: 'Email',
    getErrorMessage: (value) => (
      value && !email(value) && 'Your email is invalid'
    ),
  },
  password: {
    label: 'Password',
    type: 'password',
    placeholder: 'Password',
  },
};

export default FORM;
