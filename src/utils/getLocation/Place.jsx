import React, { useEffect } from 'react';
import './Place.scss';
import ErrorMsg from '../../components/ErrorMessage';
import getLocation from './getLocation';
import Input from '../../components/Input';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 166px;
  padding: 20px 0px;
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
    <Wrapper>
      <Input 
        id="searchTextField" 
        placeHolder="Enter a suburb"
        defaultValue={place}
        handleChange={handleAddressQuery}
      />
      { isPlaceInvalid && <ErrorMsg> Please enter a suburb </ErrorMsg>}
    </Wrapper>
  )
}

export default Place;