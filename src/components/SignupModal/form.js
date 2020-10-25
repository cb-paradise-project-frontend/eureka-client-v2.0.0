import { password, confirmPassword } from '../../utils/validators/input';

const FORM = {
  firstName: {
    label: 'First Name',
    name: 'firstName',
    type: 'string',
    placeholder: 'First Name',
  },
  lastName: {
    label: 'Last Name',
    name: 'lastName',
    type: 'string',
    placeholder: 'Last Name',
  },
  email: {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
  },
  password: {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Password with 8-16 mixed caps, numbers and special characters',
    getErrorMessage: (value) => (
      !password(value) && 'Your password must be 8-16 mixed caps, numbers and special characters'
    ),
  },
  confirmPassword: {
    label: 'Confirm Password',
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
    getErrorMessage: (value) => (
      !confirmPassword(value) && 'Your passwords do not match'
    ),
  },
}

export default FORM;
