import { AppContext } from '../../context/App';
import { useContext } from 'react';

const usePayment = () => {
  const appCtx = useContext(AppContext);
  const isPayment = appCtx.isPayment;
  return { isPayment };
};
export default usePayment;
