import React, { useState,useEffect } from 'react';

import styled from 'styled-components';
import StyleSheet from './Place.module.scss';

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

  const typeStr = JSON.stringify(type);
  console.log(typeStr)

  //const [ place, setPlace ]  = useState("");

  useEffect(() => {
    getLocation("regions", handleAddressQuery);
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