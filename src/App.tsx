import styled from 'styled-components';
import { CardContextProvider } from './context/Card';
import PaymentApp from './PaymentApp';
import { IconButton } from './components/UI';

interface AppProps {
  className?: string;
  onCloseButton?: React.MouseEventHandler<HTMLButtonElement>;
}

function App({ className, onCloseButton }: AppProps) {
  return (
    <CardContextProvider>
      <Layout className={className}>
        <Header>
          <IconButton name="close" size="2x" color="black" onClick={onCloseButton} />
        </Header>
        <PaymentApp />
      </Layout>
    </CardContextProvider>
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
`;

export default App;
