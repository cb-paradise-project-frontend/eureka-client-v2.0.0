export function onlyNumber(value) {
  return value = value.replace(/[^0-9]/g, '',); 
}