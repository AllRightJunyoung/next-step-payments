import { AliasPage } from 'pages/Alias';
import { FormPage } from './pages/Form';
import { MyCardListPage } from './pages/MyCardList';
import usePage from './pages/usePage';

const PaymentApp = () => {
  const { page } = usePage();

  return page === 'Form' ? <FormPage /> : page === 'MyCardList' ? <MyCardListPage /> : <AliasPage />;
};

export default PaymentApp;
