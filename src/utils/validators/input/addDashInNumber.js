import onlyNumber from './onlyNumber';

export default function addDashInNumber(value, position = 3) {
  if (!value) return null;
  let result = onlyNumber(value);
  if (value.length > position) {
    const regex = new RegExp('^\\d{' + position + '}', 'g');
    result = result.replace(regex, '$&-');
  }
  return result;
}
