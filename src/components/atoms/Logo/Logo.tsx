import Image from 'next/image';

import LogoImg from '../../../assets/logo.png';
import { ILogoProps } from '../../../types/components/IAtoms';

const Logo = ({ className = '' }:ILogoProps) => (
  <Image
    src={LogoImg}
    alt="Company Name Logo"  
    className={className}
  />
);

export default Logo;
