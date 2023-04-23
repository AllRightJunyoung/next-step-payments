import { useContext } from 'react';
import { CardType } from '../../types';
import { CardContext } from '../../context/Card';
import usePage from '../../pages/usePage';

const usePrimaryCard = (id: string | undefined) => {
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
    localStorage.setItem('id', currentCard.id);
    setPage('Alias');
  };

  return { remove, modify };
};

export default usePrimaryCard;
