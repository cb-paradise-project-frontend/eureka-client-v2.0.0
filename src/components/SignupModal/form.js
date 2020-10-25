import { password, confirmPassword, email } from '../../utils/validators/input';

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
    getErrorMessage: (formData) => (
      formData.email && !email(formData.email) && 'Your email is invalid'
    ),
  },
  password: {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: '8-16 mixed caps, numbers and special characters',
    required: true,
    getErrorMessage: (formData) => (
      formData.password && !password(formData.password) && 'Your password must be 8-16 mixed caps, numbers and special characters'
    ),
  },
  confirmPassword: {
    label: 'Confirm Password',
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
    required: true,
    getErrorMessage: (formData) => (
      formData.confirmPassword && !confirmPassword(formData.password, formData.confirmPassword) && 'Your passwords do not match'
    ),
  },
}

export default FORM;
