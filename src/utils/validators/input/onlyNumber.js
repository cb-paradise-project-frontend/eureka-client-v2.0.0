export default function onlyNumber(value) {
  const result = value.replace(/[^0-9]/g, '',)
  return result; 
};