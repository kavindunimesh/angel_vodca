import React from 'react';

import Link from 'next/link';

import { IImageLinkProps } from '@/types/components/IMolecules';

import CustomImage from '../Image/CustomImage';
import HoverAppendCenterOverlay from '../overlay/HoverAppendCenterOverlay';

import { FaLink } from "react-icons/fa6";

const ImageLink = ({ imageSrc, redirectLink, height, width }: IImageLinkProps) => {
  return (
    <Link href={redirectLink} className='group relative flex-1'>
      <CustomImage src={imageSrc} height={height} width={width} alt='image' className='size-full' />
      <HoverAppendCenterOverlay>
        <FaLink className='group-hover:text-accentRed text-[22px] duration-500' />
      </HoverAppendCenterOverlay>
    </Link>
  );
};

export default ImageLink;