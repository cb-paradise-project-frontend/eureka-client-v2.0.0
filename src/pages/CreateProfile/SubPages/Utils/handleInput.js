export default function handleInput(
  setter, 
  validator = (value) => value
) {
  return function callSetter ({ target:{ value } }) {
    setter(validator(value));
  };
};