export default function confirmPassword(value, inputedPassword) {
  if (!value) return false;
  const result = value.localeCompare(inputedPassword);
  if (result !== 0) return false;
  return true;
}
