import * as Styled from './VirtualKeyBoard.styles';

import type { VirtualKeyBoardProps } from './VirtualKeyBoard.types';
import { initialVirtualKeyBoard } from './utils';

const VirtualKeyBoard = ({
  isOpen,
  ui,
  handleKeyBoard,
  passwordRef,
  clearInput,
  deleteInput,
}: VirtualKeyBoardProps) => {
  const keyBoardNumbers = initialVirtualKeyBoard().map((number) => (
    <Styled.Key key={number} value={number} onClick={handleKeyBoard}>
      {number}
    </Styled.Key>
  ));

  return isOpen ? (
    <Styled.Layout>
      {ui === 'password' ? (
        <Styled.Title>비밀번호 입력 (4자리)</Styled.Title>
      ) : (
        <Styled.Title>CVC 입력 (3자리)</Styled.Title>
      )}
      <Styled.PasswordInput type="password" theme="underline" active={true} ref={passwordRef} disabled={true} />
      <Styled.KeyContainer>
        {keyBoardNumbers}
        <Styled.Key onClick={clearInput}>clear</Styled.Key>
        <Styled.Key onClick={deleteInput}>x</Styled.Key>
      </Styled.KeyContainer>
    </Styled.Layout>
  ) : (
    <></>
  );
};

export default VirtualKeyBoard;
