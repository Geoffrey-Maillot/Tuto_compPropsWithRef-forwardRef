import { useState, forwardRef } from 'react';

export enum InputSize {
  SMALL = 'small',
  NORMAL = 'Normal',
  LARGE = 'LARGE',
}

interface Props {
  error?: boolean;
  className?: string;
  inputSize?: InputSize;
  onChangeValue?: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
  type: string;
  name: string;
  value: string;
}

const ForwardInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      error,
      className: additionnalClassName,
      onChangeValue,
      disabled,
      type,
      name,
      value,
      ...props
    },
    ref
  ) => {
    const [val, setVal] = useState('');

    const handlerOnChange = (e: React.ChangeEvent) => {
      const { value } = e.target as HTMLInputElement;
      setVal(value);
      onChangeValue && onChangeValue(value);
    };

    const disableClass = disabled ? 'border-gray-200' : '';

    return (
      <input
        {...props}
        className={` border border-2 border-blue-600 pl-4 py-1 rounded ${additionnalClassName} ${disableClass}`}
        onChange={handlerOnChange}
        value={value}
        name={name}
        type={type}
        disabled={disabled}
      />
    );
  }
);

export default ForwardInput;
