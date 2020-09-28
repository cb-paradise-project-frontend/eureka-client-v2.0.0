import * as ACTION from '../Action/actionType';

export const loadProfile = (userProfile) => ({
  type: ACTION.LOAD_PROFILE,
  payload: { userProfile },
});

export const clickProfileItem = (subPage) => ({
  type: ACTION.CLICK_PROFILE_ITEM,
  payload: { subPage },
});

export const photoUpload = (photo) => ({
  type: ACTION.PHOTO_UPLOAD,
  payload: { photo },
});

export const accountInput = (bankAccount) => ({
  type: ACTION.ACCOUNT_INPUT,
  payload: { bankAccount }, 
});

export const billingAddressInput = (billingAddress) => ({
  type: ACTION.BILLING_ADDRESS_INPUT,
  payload: { billingAddress }, 
});

export const birthdayInput = (birthday) => ({
  type: ACTION.BIRTHDAY_INPUT,
  payload: { birthday }, 
});

export const mobileInput = (mobile) => ({
  type: ACTION.MOBILE_INPUT,
  payload: { mobile }, 
});

export const clickBackBtn = () => ({ 
  type: ACTION.CLICK_BACK_BUTTON
});