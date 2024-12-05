import React from 'react';

import { IButtonProps } from '@/types/components/IAtoms';

import Button from '@/components/atoms/Button/Button';

const StyledButton1 = ({
  label,
  onClick,
  className = '',
  children,
  type = 'button',
  icon
}: IButtonProps) => {
  return (
    <Button
      label={label}
      onClick={onClick}
      type={type}
      icon={icon}
      className={`font-chakraPetch styled-button-1 px-[39px] py-[15px] text-[18px] font-bold text-white duration-100 ease-linear ${className}`}
    >{children}</Button>
  );
};

export default StyledButton1;