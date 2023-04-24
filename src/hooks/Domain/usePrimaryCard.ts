import { useContext } from 'react';
import { CardContext } from '../../context/Card';
import usePage from '../../pages/usePage';

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

  const getCard = () => {
    return myCard;
  };

  return { remove, modify, payment, getCard };
};

export default usePrimaryCard;
