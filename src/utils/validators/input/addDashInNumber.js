import onlyNumber from './onlyNumber';

export default function addDashInNumber(value, position = 3) {
  let result = onlyNumber(value);
  if(value.length > position){
    const regex = new RegExp("^\\d{" + position + "}", 'g'); 
    result = result.replace(regex, '$&-');
  }
  return result;
};