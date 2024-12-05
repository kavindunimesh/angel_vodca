import React from 'react';

export interface IButtonProps {
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;  // Optional icon prop
}

export interface ICheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export interface IIconProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export interface IImageProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

export interface IInputProps {
  type?: 'text' | 'password' | 'email' | 'number' | 'date' | 'tel' | 'url'; // Input types
  id: string; // Mandatory field to associate label with input
  name: string; // Name attribute for form submissions
  value: string | number; // Value can be either string or number based on type
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Event handler for input change
  placeholder?: string; // Placeholder for input
  className?: string; // Optional className for custom styles
  min?: string | number; // Minimum value for number/date input types
  required?: boolean; // Whether the field is required
  pattern?: string; // Regex pattern for input validation
  maxLength?: number; // Maximum length for text inputs
  error?: string; // Error message for validation feedback
  readOnly?: boolean;
}

export interface ITextProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements; // Allow different HTML tags like p, span, h1, etc.
}

export interface IAnchorProp {
  href: string;
  className?: string;
  children: string;
}

export interface ILabelProps {
  text: string;
  className?: string;
}

export interface ILogoProps {
  className?: string;
}
export interface IOptionType {
  children: React.ReactNode;
  value: string | number;
}

export interface ITableCellProps {
  children: React.ReactNode;
  className?: string;
}

export interface INavbarItemProps {
  label: string;
  url?: string;
  state?: 'item' | 'sub-item';
  className?: string;
}

export interface INavbarDropdownItemProps {
  label: string;
  url?: string;
  className?: string;
  children: React.ReactNode;
}