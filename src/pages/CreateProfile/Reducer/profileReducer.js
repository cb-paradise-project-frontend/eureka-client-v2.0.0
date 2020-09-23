import * as ACTION from './Action/actionType';

export default function profileReducer(state, action) {
  switch (action.type) {
    case ACTION.PHOTO_UPLOAD:
      return {
        ...state,
        photo: action.payload.photo,
        subPage: '',
      };
    case ACTION.ACCOUNT_INPUT:
      return {
        ...state,
        bankAccount: action.payload.bankAccount,
        subPage: '',
      };
    case ACTION.BILLING_ADDRESS_INPUT:
      return {
        ...state,
        billingAddress: action.payload.billingAddress,
        subPage: '',
      };
    case ACTION.BIRTHDAY_INPUT:
      return {
        ...state,
        birthday: action.payload.birthday,
        subPage: '',
      };
    case ACTION.MOBILE_INPUT:
      return {
        ...state,
        mobile: action.payload.mobile,
        subPage: '',
      };
    case ACTION.CLICK_PROFILE_ITEM:
      return {
        ...state,
        subPage: action.payload.subPage,
      };
    case ACTION.CLICK_BACK_BUTTON:
      return {
        ...state,
        subPage: '',
      };
    default:
      return state;
  }
}
