import { useContext } from 'react';
import { CardType } from '../../types';
import { useNavigate } from 'react-router-dom';
import { CardContext } from '../../context/Card';

const useCard = (id: string | undefined) => {
  const CardCtx = useContext(CardContext);
  const myCardList = CardCtx.cardList;
  const currentCard = myCardList.find((card: CardType) => card.id === id);
  const navigate = useNavigate();

  const remove = () => {
    if (!currentCard) return;
    CardCtx.removeCard(currentCard);
  };

  const modify = () => {
    if (!currentCard) return;
    localStorage.setItem('id', currentCard.id);
    navigate('/alias');
  };

  return { remove, modify };
};

export default useCard;
