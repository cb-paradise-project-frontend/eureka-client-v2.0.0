import React from 'react';
import styled from 'styled-components';

import Overlay from '../Overlay';
import Spinner from '../Spinner';

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function LoadingPage() {
  return (
    <Overlay>
      <Layout>
        <Spinner />
      </Layout>
    </Overlay>
  );
}
