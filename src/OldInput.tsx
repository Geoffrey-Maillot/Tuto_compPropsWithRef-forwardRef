import { useState } from 'react';

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
  type?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
}

const OldInput = ({
  error,
  className: additionnalClassName,
  onChangeValue,
  type = 'text',
  name,
  value,
  disabled,
  ...props
}: Props) => {
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
      className={`border border-2 border-blue-600 pl-4 py-1 rounded ${additionnalClassName} ${disableClass}`}
      onChange={handlerOnChange}
      disabled={disabled}
      type={type}
      name={name}
      value={value}
    />
  );
};

export default OldInput;
