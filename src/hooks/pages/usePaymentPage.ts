import { useContext, useEffect } from 'react';
import { CardContext } from '../../context/Card';
import { AppContext } from '../../context/App';

import type { CardFormInputRefsType } from '../../types';
import { isValidUserCard } from '../../utils/payment';
import usePage from '../../pages/usePage';

const usePaymentPage = (refs: CardFormInputRefsType) => {
  const { setPage } = usePage();

  const cardCtx = useContext(CardContext);
  const appCtx = useContext(AppContext);
  const myCard = cardCtx.selectedCard;

  useEffect(() => {
    appCtx.setPayment(false);
  }, []);

  const home = () => {
    setPage('MyCardList');
  };
  const order = () => {
    if (!refs.cvc || !refs.password) return;
    const [cvc, password] = [refs.cvc.value, refs.password.value];
    console.log(cvc, password, myCard);
    if (!isValidUserCard(myCard, { cvc, password })) {
      alert('결제에 실패하였습니다! (올바른 입력인지 하세요!)');
      appCtx.setPayment(false);
    } else {
      alert('결제에 성공하였습니다!');
      setPage('MyCardList');
      appCtx.setPayment(true);
    }
  };

  return { home, order };
};
export default usePaymentPage;
