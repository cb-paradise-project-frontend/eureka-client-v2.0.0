import { password, confirmPassword, email } from '../../utils/validators/input';

const FORM = {
  firstName: {
    label: 'First Name',
    name: 'firstName',
    placeHolder: 'First Name',
    width: '157px'
  },
  lastName: {
    label: 'Last Name',
    type: 'string',
    placeHolder: 'Last Name',
    width: '157px'
  },
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
    name: 'password',
    type: 'password',
    placeHolder: '8-16 mixed caps, numbers and special characters',
    getErrorMessage: (value) => (
      value && !password(value) && 'Your password must be 8-16 mixed caps, numbers and special characters'
    ),
  },
  confirmPassword: {
    label: 'Confirm Password',
    name: 'confirmPassword',
    type: 'password',
    placeHolder: 'Confirm Password',
    getErrorMessage: (value, formData) => (
      value && !confirmPassword(value, formData.password) && 'Your passwords do not match'
    ),
  },
}

export default FORM;
