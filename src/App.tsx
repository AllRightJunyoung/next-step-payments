import styled from 'styled-components';
import { CardContextProvider } from './context/Card';
import PaymentApp from './PaymentApp';
import { PaymentAppContextProvider } from './context/PaymnetApp';

interface AppProps {
  className?: string;
}

function App({ className }: AppProps) {
  return (
    <PaymentAppContextProvider>
      <CardContextProvider>
        <Layout className={className}>
          <PaymentApp />
        </Layout>
      </CardContextProvider>
    </PaymentAppContextProvider>
  );
}

const Layout = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 15px;
  width: 375px;
  height: fit-content;
  min-width: 375px;
`;

export default App;
