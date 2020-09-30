function getLocation(type, callback) {
  const options = {
    componentRestrictions: {country: 'au'},
    types: [`(${type})`],
  };
  
  const input = document.getElementById('searchTextField');
  
  const autocomplete = new window.google.maps.places.Autocomplete(input, options);

  autocomplete.setFields(['formatted_address']);
  
  autocomplete.addListener('place_changed', handlePlaceSelect);

  function handlePlaceSelect() {
    const addressObj = autocomplete.getPlace();
    if(addressObj) {
      const addressQuery = addressObj.formatted_address;
      callback(addressQuery);
    }
  }
}

export default getLocation; 