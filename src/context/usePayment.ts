import { PaymentAppContext } from './PaymnetApp';
import { useContext, useEffect } from 'react';

const usePayment = () => {
  const appCtx = useContext(PaymentAppContext);
  const isPayment = appCtx.isPayment;

  useEffect(() => {
    if (isPayment) {
      setTimeout(() => {
        appCtx.setPayment(false);
      }, 1000);
    }
  }, [isPayment]);

  return { isPayment };
};
export default usePayment;
