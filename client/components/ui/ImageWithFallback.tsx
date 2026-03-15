"use client";

import React, { useState } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

interface ImageWithFallbackProps extends Omit<NextImageProps, "onError"> {
  fallbackSrc?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc = "/default-product.png",
  alt,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  const handleError = () => {
    if (!error) {
      setImgSrc(fallbackSrc);
      setError(true);
    }
  };

  return (
    <NextImage
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  );
};

export default ImageWithFallback;
