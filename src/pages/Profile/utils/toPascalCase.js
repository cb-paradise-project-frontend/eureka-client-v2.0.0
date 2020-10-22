const ToPascalCase = (inputString) => {
  const stringStored = inputString.toLowerCase();
  const pascalString = stringStored.charAt(0).toUpperCase() + stringStored.substr(1).toLowerCase();
  return pascalString
    .replace('id', 'ID')
    .replace('holder', ' Holder')
    .replace('Bsb', 'BSB')
    .replace('one', 'One')
    .replace('two', 'Two')
    .replace('number', ' Number');
};

export default ToPascalCase;
