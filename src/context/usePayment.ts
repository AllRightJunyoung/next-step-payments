import { PaymentAppContext } from './PaymnetApp';
import { useContext } from 'react';

const usePayment = () => {
  const appCtx = useContext(PaymentAppContext);
  const isPayment = appCtx.isPayment;

  return { isPayment };
};
export default usePayment;
