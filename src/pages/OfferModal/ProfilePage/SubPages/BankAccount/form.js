import { onlyNumber, addDashInNumber } from '../../../../../utils/validators/input';

const FORM = {
  holder: {
    label: 'Account holder name',
    placeHolder: 'Alice',
  },
  accountNumber: {
    label: 'Account number',
    placeHolder: '12345678',
    maxLength: 9,
    validator: onlyNumber,
    getErrorMessage: (value) => (
      !(value.length > 4) &&
        'Invalid account number: must be 5 - 9 digits.'
    ),
  },
  bsb: {
    label: 'BSB',
    placeHolder: '000-000',
    maxLength: 7,
    validator: addDashInNumber,
    getErrorMessage: (value) => (
      !(value.length > 6) &&
        'Invalid routing number for AU. The number must contain both the bank code and the branch code, and should be in the format xxxxxx.'
    ),
  },
};

export default FORM;
