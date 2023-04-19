import { CardContext } from '../../context/Card';
import { useContext } from 'react';
import useRouter from 'routes/useRouter';

const useMyCardListPage = () => {
  const { push } = useRouter();
  const cardCtx = useContext(CardContext);
  const myCardList = [...cardCtx.cardList].reverse();

  return { push, myCardList };
};

export default useMyCardListPage;
