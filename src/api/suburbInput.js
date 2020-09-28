function initialize(type) {
  const options = {
    componentRestrictions: {country: 'au'},
    types: [`(${type})`]
  };
  
  const input = document.getElementById('searchTextField');
  
  const autocomplete = new window.google.maps.places.Autocomplete(input, options);
}

export default initialize; 