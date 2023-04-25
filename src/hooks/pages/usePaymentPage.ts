import { useContext, useEffect } from 'react';
import { CardContext } from '../../context/Card';
import type { CardFormInputRefsType } from '../../types';
import { isValidUserCard } from '../../utils/payment';
import usePage from '../../context/usePage';
import { PaymentAppContext } from '../../context/PaymnetApp';

const usePaymentPage = (refs: CardFormInputRefsType) => {
  const { setPage } = usePage();

  const cardCtx = useContext(CardContext);
  const appCtx = useContext(PaymentAppContext);
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
