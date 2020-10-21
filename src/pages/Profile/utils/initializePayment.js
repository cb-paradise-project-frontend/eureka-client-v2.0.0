const setInitializePayment = (
  accountNumber,
  accountName,
  bsb,
) => {
  if (!accountNumber || !accountName || !bsb) {
    return {
      holder: '',
      accountNumber: '',
      bsb: '',
    };
  }

  return {
    holder: accountName,
    accountNumber,
    bsb,
  };
};

export default setInitializePayment;
