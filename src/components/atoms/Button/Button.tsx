// components/atoms/Button.tsx
import {IButtonProps} from '../../../types/components/IAtoms';

const Button = ({
  label,
  onClick,
  className = '',
  children,
  type = 'button',
  icon
}:IButtonProps) => (
  <button onClick={onClick} className={className} type={type}>
    {icon && <span className="icon">{icon}</span>}
    {children ? children : label}
  </button>
);

export default Button;
