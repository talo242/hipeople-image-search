import React from 'react';
import styled from 'styled-components';
import './App.css';
import Form from '../Form'

const MainContainer = styled.div`
  background-color: #efefef;
  color: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const Title = styled.h1`
`;

function App() {
  return (
    <MainContainer>
      <Title>HiPeople's Image Searcher</Title>
      <Form />
    </MainContainer>
  );
}

export default App;
