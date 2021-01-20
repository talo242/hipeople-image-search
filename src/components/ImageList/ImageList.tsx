import React from 'react';
import styled from 'styled-components';
import Img from '../Img';
import { Image } from '../../interfaces/Image/Image';

const ImageListContainer = styled.div``;

interface ImageListProps {
  images: Image[]
}

const ImageList = (props: ImageListProps) => {
  const { images } = props;
  return (
    <ImageListContainer>
      {images && images.length > 0 ? (images.map(image => (
        <Img key={image.id} src={image.urls.thumb} alt={image.alt_description} />
      ))) : 'No Images'}
    </ImageListContainer>
  )
}

export default ImageList;
