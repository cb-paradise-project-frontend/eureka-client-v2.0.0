import React, { useEffect } from 'react';
import './Place.scss';
import ErrorMsg from '../../components/ErrorMessage';
import getLocation from './getLocation';
import Input from '../../components/Input';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 300px;
  padding: 20px 0px;
`

function Place({
  type,
  place,
  isPlaceInvalid,
  handleAddressQuery,
}) {

  useEffect(() => {
    getLocation(`${type}`, handleAddressQuery);
  }, [getLocation])
 
  return(
    <Wrapper>
      <Input 
        id="searchTextField" 
        placeholder="Enter a location"
        defaultValue={place}
        handleChange={handleAddressQuery}
      />
      { isPlaceInvalid && <ErrorMsg> Please enter the task location </ErrorMsg>}
    </Wrapper>
  )
}

export default Place;