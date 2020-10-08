import React, { useEffect } from 'react';

import styled from 'styled-components';
import './Place.scss';

import ErrorMsg from '../../components/ErrorMessage';

import getLocation from './getLocation';

const PlaceInput = styled.input`
`

function Place({
  type,
  place,
  isPlaceInvalid,
  handleAddressQuery,
}) {

  useEffect(() => {
    getLocation(`${type}`, handleAddressQuery); //"regions" 
    // handleAddressQuery();
  }, [getLocation])

  // const handleAddressQuery = (addressQuery) => {
  //   setPlace(addressQuery)
  // }

 
  return(
    <React.Fragment>
      <PlaceInput 
        id="searchTextField" 
        placeholder="Enter a suburb"
        defaultValue={place}
      />
      { isPlaceInvalid && <ErrorMsg> Please enter a suburb </ErrorMsg>}
    </React.Fragment>
  )
}

export default Place;