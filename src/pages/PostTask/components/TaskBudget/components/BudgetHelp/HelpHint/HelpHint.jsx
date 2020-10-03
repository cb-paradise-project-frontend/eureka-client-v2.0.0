import React from 'react';

import styled from 'styled-components';

function HelpHint({
  taskSize,
  taskPayRate,
  Eg,
}) {
  const NormalLine = styled.h4`
    font-size: 14px;
    color: #ffffff;
    text-align: left;
    margin-left: 0.3em;
    margin-block-start: 0.1em;
    margin-block-end: 0.1em;
  `
  const EgLine = styled(NormalLine)`
    font-size: 12px;
  `

  return (
    <div>
      <NormalLine> {taskSize} </NormalLine>
      <NormalLine> {taskPayRate} </NormalLine>
      <EgLine> {Eg} </EgLine>
    </div>
  )
}

export default HelpHint;