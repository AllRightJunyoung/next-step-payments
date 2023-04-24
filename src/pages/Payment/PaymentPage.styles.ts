import styled from 'styled-components';
import { Button } from '../../components/UI';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  color: #383838;
  margin-top: 10px;
  margin-bottom: 20px;
  gap: 20px;
`;

export const CardWrapper = styled.div`
  margin-top: 30px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 20px;
  margin-top: 30px;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  text-align: right;
  margin: 30px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
export const LongButton = styled(Button)`
  width: 100%;
  background-color: black;
  color: white;
`;
