import styled from 'styled-components';
import { Text, FormInput } from '../../../UI';

export const Layout = styled.div`
  margin-top: 20px;
`;
export const Title = styled(Text)`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  color: #525252;
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;
export const CardSecurityInput = styled(FormInput)`
  width: 20%;
  font-size: 30px;
  margin-right: 10px;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
`;
