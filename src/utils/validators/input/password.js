export default function password(value) {
  const result = value && value.match(/^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,16}$/gm);
  if (!result) return false;
  return true;
}
