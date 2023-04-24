import { useContext } from 'react';
import { CardType } from '../../types';
import { CardContext } from '../../context/Card';
import usePage from '../../pages/usePage';

const usePrimaryCard = (id: string) => {
  const CardCtx = useContext(CardContext);
  const myCardList = CardCtx.cardList;
  const currentCard = myCardList.find((card: CardType) => card.id === id);

  const { setPage } = usePage();

  const remove = () => {
    if (!currentCard) return;
    CardCtx.removeCard(currentCard);
  };

  const modify = () => {
    if (!currentCard) return;
    CardCtx.selectCard(currentCard);
    setPage('Alias');
  };

  const payment = () => {
    if (!currentCard) return;
    setPage('Payment');
  };

  const getCard = () => {
    if (!currentCard) return;
    return currentCard;
  };

  return { remove, modify, payment, getCard };
};

export default usePrimaryCard;
