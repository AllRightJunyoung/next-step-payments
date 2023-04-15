import type { CardPasswordInputProps } from './CardPasswordInput.types';
import * as Styled from './CardPasswordInput.styles';
import { KeyBoardIconButton, HelpIcon } from 'components/UI';
import { useVirtualKeyBoard } from 'hooks/Domain';
const CardPasswordInput = ({ refs, fontColor }: CardPasswordInputProps) => {
  const { showUI } = useVirtualKeyBoard(refs);

  return (
    <Styled.Layout>
      <Styled.Title fontSize="xs" weight="bold" label="카드 비밀번호" />
      <Styled.Box>
        <Styled.CardPasswordInput
          ref={(ref) => (refs.password = ref)}
          type="password"
          theme="primary"
          fontColor={fontColor}
          active={true}
          disabled={true}
          maxLength={4}
        />
        <Styled.IconBox>
          <Styled.CardPassWordHelpIcon>비밀번호 4자리</Styled.CardPassWordHelpIcon>
          <KeyBoardIconButton onClick={() => showUI('password')} />
        </Styled.IconBox>
      </Styled.Box>
    </Styled.Layout>
  );
};

export default CardPasswordInput;
