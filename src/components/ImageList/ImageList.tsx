import React, { useState } from 'react';
import styled from 'styled-components';
import Img from '../Img';
import Image from '../../interfaces/Image/Image.interface';
import Button from '../Button';
import PhotoPlaceholder from '../PhotoPlaceholder/photo.svg';

const ImageListContainer = styled.div`
  width: 100%;
  max-width: 640px;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 640px) {
    display: block;
    column-count: 3;
    column-gap: 16px;
  }
`;

const PlaceholderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 64px;
`;

const Placeholder = styled.img`
  display: flex;
  width: 160px;
  margin: 0 auto;
  opacity: 0.2;
`;
interface ImageListProps {
  images: Image[];
  query: string;
  searchImage: (query: string, page: number) => void;
  selectImage: (image: string) => void;
}

const ImageList = (props: ImageListProps) => {
  const { images, query, searchImage, selectImage } = props;
  const [page, setPage] = useState<number>(1);

  const handleOnClickMore = () => {
    const newPage = page + 1;
    searchImage(query, newPage);
    setPage(newPage)
  }

  const handleImageClick = (id: string) => {
    selectImage(id)
  }

  return (
    <div>
      {images.length > 0 ? (
        <ImageListContainer>
          {images.map(image => (
            <Img id={image.id} key={image.id} onClick={handleImageClick} src={image.urls.thumb} alt={image.alt_description} />
          ))}
        </ImageListContainer>
      ) : (
          <PlaceholderContainer>
            <Placeholder src={PhotoPlaceholder} alt="Placeholder" />
          </PlaceholderContainer>
        )}
      {images.length > 0 && <Button fullWidth onClick={handleOnClickMore}>Load more →</Button>}
    </div>
  )
}

export default ImageList;
