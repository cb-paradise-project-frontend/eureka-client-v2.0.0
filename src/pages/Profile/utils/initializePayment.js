const setInitializePayment = (bankAccount) => {
  if (!bankAccount) {
    return {
      accountHolder: '',
      accountNumber: '',
      bsb: '',
    };
  }

  return bankAccount;

  // return !bankAccountData ? {
  //   holder: '',
  //   accountNumber: '',
  //   bsb: '',
  // } : bankAccountData;
};

export default setInitializePayment;
