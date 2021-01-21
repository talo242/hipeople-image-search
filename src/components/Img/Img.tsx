import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  display: inline-block;
  padding: 4px 0;
`;

const ImgButton = styled.button`
  border: none;
  background: transparent;
`;

interface ImgProps {
  onClick: (id: string) => void;
  src: string;
  alt: string;
  id: string;
}

const Img = (props: ImgProps) => {
  const { id, src, alt, onClick } = props;

  const handleClick = () => {
    onClick(id)
  }

  return (<ImgButton onClick={handleClick}><StyledImg src={src} alt={alt} /></ImgButton>)
};

export default Img;
