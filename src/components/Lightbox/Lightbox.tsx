import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from '../../interfaces/Image/Image.interface';

const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0,0,0,0.75);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  display: flex;
  background-color: white;
  box-shadow: 0 5px 20px rgba(0,0,0,0.7);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255, 255, 255, 0.85);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
`;

const LightboxImg = styled.img`
  max-height: 90vh;
`;

interface LightboxProps {
  image: Image | null;
  selectImage: (image: Image | null) => void;
}

const Lightbox = (props: LightboxProps) => {
  const { image, selectImage } = props;

  const closeImage = () => selectImage(null);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      const key = e.key;
      if (key === 'Escape') {
        selectImage(null);
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [selectImage]);

  if (!image) return null;

  return (
    <Overlay>
      <Modal>
        <CloseButton onClick={closeImage}>×</CloseButton>
        <LightboxImg src={image.urls.regular} />
      </Modal>
    </Overlay>
  )
}

export default Lightbox;
