import * as Styled from './AddCard.styles';
import type { AddCardProps } from './AddCard.types';

const AddCard = ({ color, size, onClick }: AddCardProps) => {
  return (
    <Styled.Layout onClick={onClick}>
      <Styled.Container color={color} size={size}>
        +
      </Styled.Container>
    </Styled.Layout>
  );
};
export default AddCard;
