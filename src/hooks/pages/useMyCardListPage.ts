import usePage from '../../context/usePage';
import { CardContext } from '../../context/Card';
import { useContext } from 'react';

const useMyCardListPage = () => {
  const cardCtx = useContext(CardContext);
  const myCardList = [...cardCtx.cardList].reverse();
  const { setPage, page } = usePage();

  const handleCard = () => {
    setPage('Form');
  };

  return { myCardList, page, handleCard };
};

export default useMyCardListPage;
