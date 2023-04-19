import styled from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { CardContextProvider } from './context/Card';
import { AppContextProvider } from './context/App';
import PaymentApp from './PaymentApp';

interface AppProps {
  className?: string;
}

function App({ className }: AppProps) {
  return (
    <Layout className={className}>
      <GlobalStyle />
      <AppContextProvider>
        <CardContextProvider>
          <PaymentApp />
        </CardContextProvider>
      </AppContextProvider>
    </Layout>
  );
}

const Layout = styled.div`
  background-color: #fff;
  width: 375px;
  min-width: 375px;
  position: relative;
  border-radius: 15px;
`;

export default App;
