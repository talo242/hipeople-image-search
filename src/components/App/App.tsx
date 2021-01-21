import React from 'react';
import styled from 'styled-components';
import Form from '../Form'
import ImageList from '../ImageList';
import Lightbox from '../Lightbox';

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
  padding: 16px 16px 24px;
`;

const Title = styled.h1`
  font-family: 'Fraunces', serif;
`;

const SearchContainer = styled.div`
  margin-top: 16px;
`;

interface AppProps {
  selectedImage: string | null
}

function App(props: AppProps) {
  const { selectedImage } = props;
  return (
    <MainContainer>
      <SearchContainer>
        <Title>HiPeople's Image Searcher</Title>
        <Form />
      </SearchContainer>
      <ImageList />
      {
        selectedImage && (
          <Lightbox />
        )
      }
    </MainContainer>
  );
}

export default App;
