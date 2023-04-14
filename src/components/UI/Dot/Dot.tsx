import type { DotProps } from './Dot.types';
import * as Styled from './Dot.styles';
import { Text } from 'components/UI';

const Dot = ({ className, color, value, onClick }: DotProps) => {
  return (
    <Styled.Layout onClick={onClick} className={className}>
      <Styled.Circle color={color} />
      <Text fontSize="s" weight="bold" label={value} />
    </Styled.Layout>
  );
};
export default Dot;
