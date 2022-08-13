import { useState } from 'react';

export enum InputSize {
  SMALL = 'small',
  NORMAL = 'Normal',
  LARGE = 'LARGE',
}

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  error?: boolean;
  className?: string;
  inputSize?: InputSize;
  onChangeValue?: React.Dispatch<React.SetStateAction<string>>;
}

const InputWithoutRef = ({
  error,
  className: additionnalClassName,
  onChangeValue,
  ...props
}: Props) => {
  const [val, setVal] = useState('');

  const handlerOnChange = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setVal(value);
    onChangeValue && onChangeValue(value);
  };

  const disableClass = props.disabled ? 'border-gray-200' : '';

  return (
    <input
      {...props}
      className={` border border-2 border-blue-600 pl-4 py-1 rounded ${additionnalClassName} ${disableClass}`}
      onChange={handlerOnChange}
      disabled={props.disabled}
    />
  );
};

export default InputWithoutRef;
