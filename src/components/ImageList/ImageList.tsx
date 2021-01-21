import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Img from '../Img';
import Image from '../../interfaces/Image/Image.interface';
import Button from '../Button';

const ImageListContainer = styled.div`
  width: 100%;
  max-width: 640px;
  padding-top: 32px;
  column-count: 3;
  column-gap: 16px;
`;
interface ImageListProps {
  images: Image[];
  query: string;
  searchImage: (query: string, page: number) => void;
  selectImage: (image: Image) => void;
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
    const image = images.find(img => id === img.id);
    if (image) {
      selectImage(image)
    }
  }

  return (
    <div>
      <ImageListContainer>
        {images.map(image => (
          <Img id={image.id} key={image.id} onClick={handleImageClick} src={image.urls.thumb} alt={image.alt_description} />
        ))}
      </ImageListContainer>
      {
        images.length > 0 && <Button fullWidth onClick={handleOnClickMore}>Load more →</Button>
      }
    </div>
  )
}

export default ImageList;
