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

export const clickBackBtn = () => (
  { type: ACTION.CLICK_BACK_BUTTON }
);