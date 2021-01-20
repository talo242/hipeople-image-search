import React from 'react';

interface ImgProps {
    src: string;
    alt: string;
}

const Img = (props: ImgProps) => {
    const { src, alt } = props;
    return <img src={src} alt={alt} />
};

export default Img;
