import React from 'react';
import styled from 'styled-components';

const CenteredLayout = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default CenteredLayout;
