import styled from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { CardContextProvider } from '../context/Card';
import Routes from 'routes';

function App() {
  return (
    <Layout>
      <CardContextProvider>
        <GlobalStyle />
        <Routes />
      </CardContextProvider>
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
