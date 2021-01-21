import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  display: inline-block;
  padding: 4px 0;
`;

interface ImgProps {
  src: string;
  alt: string;
}

const Img = (props: ImgProps) => {
  const { src, alt } = props;
  return <StyledImg src={src} alt={alt} />
};

export default Img;
