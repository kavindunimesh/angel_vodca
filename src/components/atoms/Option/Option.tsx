import { IOptionType } from '../../../types/components/IAtoms';

export const Option = ({ children, value }: IOptionType) => {
  return (
    <option value={value}>
      {children}
    </option>
  );
};
