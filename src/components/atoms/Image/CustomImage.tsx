'use client';
import React, { useState } from 'react';

import Image from 'next/image';

import Icon from '../Icon/Icon';

import { IImageProps } from '../../../types/components/IAtoms';

const CustomImage = ({ src, alt, width, height, priority, className }: IImageProps) => {
  const [isError, setIsError] = useState(false);
  const outsideImage = src?.startsWith('https');

  const handleError = () => {
    setIsError(true);
  };

  return (
    !isError ? (
      outsideImage ? (
        <div className={`relative ${className}`} style={{ height: `${height}px`, width: `${width}px` }}>
          <Image
            src={src || '/'}
            alt={alt || ''}
            fill
            sizes={`${width}px`}
            loading={priority ? undefined : 'lazy'}
            priority={priority} // Load image with priority
            onError={handleError} // Fallback image if the image source fails
          />
        </div>
      ) : (
        <Image
          src={src || '/'}
          alt={alt || ''}
          width={width}
          height={height}
          className={className}
          loading={priority ? undefined : 'lazy'}
          priority={priority} // Load image with priority
          onError={handleError} // Fallback image if the image source fails
        />
      )
    ) : (
      <div
        className={`flex items-center justify-center bg-gray-300 text-center ${className}`}
        style={width && height ? { width: `${width}px`, height: `${height}px` } : {}}
      >
        <Icon src='/icons/image.svg' alt='image' width={30} height={30} className={`${height && (height < 50 ? 'h-full' : height < 100 ? 'h-1/2' : 'h-1/3 max-h-[80px]')} w-auto`} />
      </div>
    )
  );
};

export default CustomImage;
