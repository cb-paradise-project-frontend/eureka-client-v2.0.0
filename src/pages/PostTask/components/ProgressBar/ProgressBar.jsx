import styled, { css } from 'styled-components';

const ProgressBar = styled.div`
    width: 100%;
    height: 3px;
    background-color: rgb(246, 248, 253);
    &:after{
      display: block;
      content: " ";
      height: 3px;
      background:  #4c8bf5;
      transition: all 0.8s ease 0s;
      ${(props) => {
        const style = {
          0: css`width: 0%;`,
          1: css`width: 33.333%;`,
          2: css`width: 66.666%;`,
          3: css`width: 83.333%;`,
        }[props.currentStep];

        return style;
      }}
    }
`

export default ProgressBar;