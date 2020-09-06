export default function handleInput(setter) {
  return function callSetter (e) {
    setter(e.target.value);
  };
};