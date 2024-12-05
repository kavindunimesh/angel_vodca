import { ReactNode } from "react";

export interface IIconLabelProps {
  Icon: ReactNode;
  label: string;
  url: string;
  className?: string;
}

export interface IFlexLayoutProps {
  gap?: string;
  className?: string;
}

export interface IImageLinkProps {
  imageSrc: string;
  redirectLink: string;
  height: number;
  width: number;
}