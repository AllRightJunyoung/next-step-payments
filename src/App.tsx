import styled from 'styled-components';
import { CardContextProvider } from './context/Card';
import { PaymentAppContextProvider } from './context/PaymnetApp';
import PaymentApp from './PaymentApp';
import { IconButton } from './components/UI';
import { useUI } from './hooks/common';
interface AppProps {
  className?: string;
}

function App({ className }: AppProps) {
  const { isOpen, setIsOpen } = useUI();

  return (
    <PaymentAppContextProvider>
      <CardContextProvider>
        {!isOpen && (
          <Layout className={className}>
            <Header>
              <IconButton name="close" color="black" size="xl" onClick={() => setIsOpen(true)} />
            </Header>
            <PaymentApp />
          </Layout>
        )}
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
const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  margin: 5px;
`;

export default App;
