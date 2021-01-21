import React from 'react';
import styled from 'styled-components';
import './App.css';
import Form from '../Form'
import ImageList from '../ImageList';

const MainContainer = styled.div`
  background-color: #efefef;
  color: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  font-family: 'Work Sans', sans-serif;
`;

const Title = styled.h1`
  font-family: 'Lora', serif;
`;

const SearchContainer = styled.div`
  margin-top: 16px;
`;

function App() {
  return (
    <MainContainer>
      <SearchContainer>
        <Title>HiPeople's Image Searcher</Title>
        <Form />
      </SearchContainer>
      <ImageList />
    </MainContainer>
  );
}

export default App;
