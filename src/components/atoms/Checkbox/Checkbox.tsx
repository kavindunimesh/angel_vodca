import { ICheckboxProps } from '../../../types/components/IAtoms';

const Checkbox = ({ checked, onChange, label }: ICheckboxProps) => (
  <label className="relative inline-flex items-center text-gray-600">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      aria-checked={checked}
      aria-label={label}
      className={`size-5 cursor-pointer appearance-none rounded-lg outline-none transition-colors duration-300 ${checked ? 'border-orange-500 bg-orange-500' : 'border-gray-300 bg-white'
        }`}
    />
    {checked && (
      <span className="pointer-events-none absolute left-1 top-0.5 text-sm leading-5 text-white">
        &#10003;
      </span>
    )}
    <span className="ml-2">{label}</span>
  </label>
);

export default Checkbox;