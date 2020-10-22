export default function onlyNumber(value) {
  const result = value && value.replace(/[^0-9]/g, '');
  return result;
}
