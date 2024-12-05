import { ILabelProps } from '../../../types/components/IAtoms';

const Label = ({ text, className = '' }:ILabelProps) => (
  <label className={className}>
    {text}
  </label>
);

export default Label;
