import type { CardProps } from './Card.types';
import * as Styled from './Card.styles';
import { Text, IconButton } from '../../../components/UI';
import { useCard } from '../../../hooks/Domain';

const Card = ({
  type,
  color,
  company,
  size,
  number,
  expireMonth,
  expireYear,
  ownerName,
  id,
  className,
  onClick,
}: CardProps) => {
  const { remove, modify } = useCard(id);

  return (
    <Styled.Layout onClick={onClick} id={id} className={className}>
      {type === 'primary' ? (
        <Styled.Container color={color} size={size}>
          <Styled.Top>
            {company && <Text fontSize="s" weight="normal" label={company} />}
            {id && (
              <div>
                <IconButton onClick={modify} name="modify" size="1x" color="black" />
                <IconButton onClick={remove} name="remove" size="1x" color="black" />
              </div>
            )}
          </Styled.Top>
          <Styled.Middle>
            <Styled.Chip />
          </Styled.Middle>
          <Styled.Bottom>
            {number && <Text fontSize="m" weight="normal" label={number} />}
            <Styled.InfoContainer>
              {!ownerName ? (
                <Text fontSize="s" weight="bold" label={'Name'} />
              ) : (
                <Text fontSize="s" weight="bold" label={ownerName} />
              )}

              {expireMonth?.length !== 0 && expireYear?.length !== 0 ? (
                <Text fontSize="s" weight="bold" label={`${expireMonth}/${expireYear}`} />
              ) : (
                <Text fontSize="s" weight="bold" label="MM/YY" />
              )}
            </Styled.InfoContainer>
          </Styled.Bottom>
        </Styled.Container>
      ) : (
        <Styled.Container color={color} size={size}>
          +
        </Styled.Container>
      )}
    </Styled.Layout>
  );
};

export default Card;
