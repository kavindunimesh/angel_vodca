// components/atoms/Input.tsx
import {IInputProps} from '../../../types/components/IAtoms';

const Input = ({
  type = 'text', // Default type as 'text'
  id,
  name,
  value,
  onChange,
  placeholder,
  className,
  min,
  required,
  pattern,
  maxLength,
  error,
}:IInputProps) => (
  <>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={type === 'number' || type === 'date' ? min : undefined} // Conditionally render min attribute for number and date types
      required={required}
      pattern={pattern}
      maxLength={maxLength}
      className={`w-full border px-4 py-3 ${error ? 'border-red-500' : 'border-neutral-gray-light'} rounded-lg focus:outline-none focus:ring-2 ${error ? 'focus:ring-red-500' : 'focus:ring-primary'} ${className}`}
      aria-label={placeholder || name} // ARIA label for accessibility
    />
    {error && <span className="text-sm text-red-500">{error}</span>} {/* Error message */}
  </>
);


export default Input;
