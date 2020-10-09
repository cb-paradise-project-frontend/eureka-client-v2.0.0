export default function isFormFilled(formValue) {
  if (typeof formValue === 'object') {
    const valueArray = Object.values(formValue);
    const result = valueArray.filter((value) => value);
    return (result.length === valueArray.length);
  }
  return !!formValue;
}
