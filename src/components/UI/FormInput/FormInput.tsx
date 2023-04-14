import { forwardRef } from 'react';
import type { InputProps } from './FormInput.types';
import * as Styled from './FormInput.styles';
const FormInput = ({ ...props }: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  return <Styled.Root {...props} ref={ref} />;
};

export default forwardRef(FormInput);
