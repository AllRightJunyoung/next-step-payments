import { PaymentPage } from './pages/Payment';
import { AliasPage } from './pages/Alias';
import { FormPage } from './pages/Form';
import { MyCardListPage } from './pages/MyCardList';
import usePage from './context/usePage';
import type { AppPage } from './context/PaymnetApp';

const createPage = (page: AppPage) => {
  switch (page) {
    case 'Form':
      return <FormPage />;
    case 'MyCardList':
      return <MyCardListPage />;
    case 'Alias':
      return <AliasPage />;
    case 'Payment':
      return <PaymentPage />;
    default:
      return <div>404 NotFound</div>;
  }
};

const PaymentApp = () => {
  const { page } = usePage();

  return createPage(page);
};

export default PaymentApp;
