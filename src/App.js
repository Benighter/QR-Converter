import React from 'react';
import QRCodeConverter from './components/QRCodeConverter';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #121212; /* Dark background for a futuristic look */
`;

const App = () => {
  return (
    <AppContainer>
      <QRCodeConverter />
    </AppContainer>
  );
};

export default App;
