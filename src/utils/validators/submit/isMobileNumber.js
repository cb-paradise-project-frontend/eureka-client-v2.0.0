export default function isMobileNumber(mobile) {
  if(!mobile) return false;

  const conditions = [ 
    // length valid
    (mobile.length === 10),
    // prefix valid
    (mobile.slice(0, 2) === '04'),
  ];

  const reducer = (accumulator, currentValue) => accumulator && currentValue; 
  return conditions.reduce(reducer, true);
};