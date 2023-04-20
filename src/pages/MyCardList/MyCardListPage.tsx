import { CardType } from '../../types';
import { getCardCompnayColor } from '../../utils/Card';
import * as Styled from './MyCardListPage.styles';
import useMyCardListPage from '../../hooks/pages/useMyCardListPage';

import { Card, Text } from '../../components/UI';

const MyCardListPage = () => {
  const { myCardList, handleCard } = useMyCardListPage();

  return (
    <Styled.Layout>
      <Styled.Title fontSize="xl" weight="bold" label="보유카드" />
      <Styled.ScrollContainer>
        <Styled.AddCard type="add" size="small" onClick={handleCard} />
        {myCardList.map((card: CardType) => (
          <Styled.CardLayout key={card.id}>
            <Card
              type="primary"
              id={card.id}
              color={getCardCompnayColor(card.company)}
              company={card.company}
              size="small"
              number={card.cardNumbers}
              expireMonth={card.expireDate.month}
              expireYear={card.expireDate.year}
              ownerName={card.ownerName}
            />
            <Text
              fontSize="m"
              weight="bold"
              label={card.alias}
              key={card.id}
              fontColor={getCardCompnayColor(card.company)}
            />
          </Styled.CardLayout>
        ))}
      </Styled.ScrollContainer>
    </Styled.Layout>
  );
};
export default MyCardListPage;
