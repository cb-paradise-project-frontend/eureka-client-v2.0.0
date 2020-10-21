const setInitalizeBilling = (billingAddress) => {
  const billinginitializeData = !billingAddress ? {
    lineOne: '',
    lineTwo: '',
    suburb: '',
    state: '',
    postcode: '',
    country: '',
  } : billingAddress;

  return billinginitializeData;
};

export default setInitalizeBilling;
