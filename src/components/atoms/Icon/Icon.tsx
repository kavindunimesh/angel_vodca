import Image from 'next/image';

import { IIconProps } from '../../../types/components/IAtoms';

const DEFAULT_ICON_WIDTH = 24;
const DEFAULT_ICON_HEIGHT = 24;

const Icon = ({
  src,
  alt,
  width = DEFAULT_ICON_WIDTH,
  height = DEFAULT_ICON_HEIGHT,
  className = '',
}: IIconProps) => (
  <Image
    src={src}
    alt={alt || 'icon'}
    width={width}
    height={height}
    className={`h-[${height}px] w-[${width}px] ${className}`}
    loading="lazy"
  />
);

export default Icon;
