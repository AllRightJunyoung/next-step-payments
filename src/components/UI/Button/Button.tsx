import type { ButtonProps } from "./Button.types";
import * as Styled from "./Button.styles";

const Button = ({ ...props }: ButtonProps) => {
  return <Styled.CommonButton {...props}>{props.label}</Styled.CommonButton>;
};
export default Button;
