import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import styled from 'styled-components';

// Define your styled components outside of the render function
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #232323;
  border-radius: 10px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

const Title = styled.h1`
  color: #00FF41;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid #00FF41;
  border-radius: 5px;
  color: white;
  background-color: transparent;
  &::placeholder {
    color: #e0e0e0;
  }
`;

const QRCodeContainer = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 8px;
`;

// QRCodeConverter component
const QRCodeConverter = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Container>
      <Title>QR Code Generator</Title>
      <Input
        type="text"
        placeholder="Enter text here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <QRCodeContainer>
        <QRCode value={inputValue} size={256} />
      </QRCodeContainer>
    </Container>
  );
};

export default QRCodeConverter;
