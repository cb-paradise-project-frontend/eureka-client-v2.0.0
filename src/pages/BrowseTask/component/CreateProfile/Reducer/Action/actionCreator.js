import * as ACTION from '../Action/actionType';

export const clickProfileItem = (subPage) => (
  {
    type: ACTION.CLICK_PROFILE_ITEM,
    payload: { subPage }, 
  }
);

export const accountInput = (bankAccount) => {
  return {
    type: ACTION.ACCOUNT_INPUT,
    payload: { bankAccount }, 
  }
};

export const billingAddressInput = (billingAddress) => {
  return {
    type: ACTION.BILLING_ADDRESS_INPUT,
    payload: { billingAddress }, 
  }
};

export const birthdayInput = (birthday) => {
  return {
    type: ACTION.BIRTHDAY_INPUT,
    payload: { birthday }, 
  }
};

export const clickBackBtn = () => (
  { type: ACTION.CLICK_BACK_BUTTON }
);