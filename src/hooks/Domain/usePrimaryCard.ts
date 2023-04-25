import { useContext } from 'react';
import { CardContext } from '../../context/Card';
import usePage from '../../context/usePage';

const usePrimaryCard = () => {
  const cardCtx = useContext(CardContext);

  const myCard = cardCtx.selectedCard;

  const { setPage } = usePage();

  const remove = () => {
    cardCtx.removeCard(myCard);
  };

  const modify = () => {
    cardCtx.selectCard(myCard);
    setPage('Alias');
  };

  const payment = () => {
    cardCtx.selectCard(myCard);
    setPage('Payment');
  };

  return { remove, modify, payment, myCard };
};

export default usePrimaryCard;
