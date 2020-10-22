const setInitializePayment = (
  accountNumber,
  accountHolder,
  bsb,
) => {
  if (!accountNumber || !accountHolder || !bsb) {
    return {
      accountNumber: '',
      accountHolder: '',
      bsb: '',
    };
  }

  return {
    accountHolder,
    accountNumber,
    bsb,
  };

  // return !bankAccountData ? {
  //   holder: '',
  //   accountNumber: '',
  //   bsb: '',
  // } : bankAccountData;
};

export default setInitializePayment;
