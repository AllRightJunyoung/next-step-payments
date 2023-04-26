import { PaymentAppContext } from './PaymnetApp';
import { useContext, useEffect } from 'react';

const usePayment = () => {
  const appCtx = useContext(PaymentAppContext);
  const isPayment = appCtx.isPayment;

  useEffect(() => {
    return () => {
      appCtx.setPayment(false);
    };
  }, []);

  return { isPayment };
};
export default usePayment;
