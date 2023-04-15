import styled from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { PaymentsContextProvider } from 'context/Payments';
import Routes from 'routes';

function App() {
  return (
    <Layout>
      <PaymentsContextProvider>
        <GlobalStyle />
        <Routes />
      </PaymentsContextProvider>
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
