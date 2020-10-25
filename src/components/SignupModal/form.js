import { password, confirmPassword } from '../../utils/validators/input';

const FORM = {
  firstName: {
    label: 'First Name',
    name: 'firstName',
    type: 'string',
    placeholder: 'First Name',
    required: true,
  },
  lastName: {
    label: 'Last Name',
    name: 'lastName',
    type: 'string',
    placeholder: 'Last Name',
    required: true,
  },
  email: {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    required: true,
  },
  password: {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: '8-16 mixed caps, numbers and special characters',
    required: true,
    getErrorMessage: (value) => (
      value && !password(value) && 'Your password must be 8-16 mixed caps, numbers and special characters'
    ),
  },
  confirmPassword: {
    label: 'Confirm Password',
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
    required: true,
    // TODO: PASS PASSWORD TO COMPARE
    // getErrorMessage: (value) => (
    //   value && !confirmPassword(value) && 'Your passwords do not match'
    // ),
  },
}

export default FORM;
