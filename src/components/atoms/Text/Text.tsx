import { ITextProps} from '../../../types/components/IAtoms';

const Text = ({ children, className = '', as: Component = 'p' }:ITextProps) => (
  <Component className={`font-inter ${className}`}>
    {children}
  </Component>
);

export default Text;
