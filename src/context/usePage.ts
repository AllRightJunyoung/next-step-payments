import { PaymentAppContext } from './PaymnetApp';
import { useContext } from 'react';
import type { AppPage } from './PaymnetApp';

const usePage = () => {
  const appCtx = useContext(PaymentAppContext);
  const page = appCtx.page;

  const setPage = (type: AppPage) => {
    appCtx.changePage(type);
  };

  return { page, setPage };
};
export default usePage;
