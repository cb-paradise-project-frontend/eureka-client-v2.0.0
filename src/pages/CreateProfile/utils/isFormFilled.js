export default function isFormFilled(stateValue) {
  if (typeof stateValue === 'object') {
    const valueArray = Object.values(stateValue);
    const result = valueArray.filter((value) => value);
    return (result.length === valueArray.length);
  }
  return !!stateValue;
}
