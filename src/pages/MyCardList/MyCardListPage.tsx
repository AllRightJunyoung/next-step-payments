import * as Styled from './MyCardListPage.styles';
import { PrimaryCard, Text, AddCard } from '../../components/UI';

import { CardType } from '../../types';
import { getCardCompnayColor } from '../../utils/Card';
import useMyCardListPage from '../../hooks/pages/useMyCardListPage';
import usePayment from '../../context/usePayment';
const MyCardListPage = () => {
  const { myCardList, handleCard } = useMyCardListPage();
  const { isPayment } = usePayment();

  return (
    <Styled.Layout>
      <Styled.Title fontSize="xl" weight="bold" label="보유카드" />
      <Styled.ScrollContainer>
        <AddCard size="small" onClick={handleCard} />
        {myCardList.map((card: CardType) => (
          <Styled.CardLayout key={card.id}>
            <PrimaryCard
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
      <button onClick={() => console.log(isPayment)}></button>
    </Styled.Layout>
  );
};
export default MyCardListPage;
