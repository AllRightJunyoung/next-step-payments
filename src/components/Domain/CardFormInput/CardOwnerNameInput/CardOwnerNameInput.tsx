import type { CardOwnerNameInputProps } from './CardOwnerNameInput.types';
import * as Styled from './CardOwnerNameInput.styles';
import { Text } from 'components/UI';

const CardOwnerNameInput = ({ onChange, fontColor, refs, length, isValid }: CardOwnerNameInputProps) => {
  return (
    <Styled.Layout>
      <Styled.Container>
        <Styled.OwnerName fontSize="xs" weight="bold" label="카드 소유자 이름(선택)" />
        <Styled.OwnerNameLength fontSize="s" weight="normal" label={`${length}/10`} />
      </Styled.Container>
      <Styled.CardOwnerNameInput
        type="text"
        theme="primary"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        ref={(ref) => (refs.ownerName = ref)}
        onChange={onChange}
        fontColor={fontColor}
        active={true}
        error={!isValid}
      />
      {!isValid && (
        <Text fontSize="xs" weight="bold" label="소유자 이름은 3자리이상이고 문자여야 합니다." fontColor="red" />
      )}
    </Styled.Layout>
  );
};

export default CardOwnerNameInput;
