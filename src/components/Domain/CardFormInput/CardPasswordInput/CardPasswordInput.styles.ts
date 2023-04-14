import styled from 'styled-components';

import { Text, FormInput } from 'components/UI';

export const Layout = styled.div`
  margin-top: 20px;
`;
export const Title = styled(Text)`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  color: #525252;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;
export const CardPasswordInput = styled(FormInput)`
  width: 25%;
  font-size: 30px;
`;
