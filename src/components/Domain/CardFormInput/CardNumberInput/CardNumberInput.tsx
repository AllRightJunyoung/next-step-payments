import type { CardNumberInputProps } from './CardNumberInput.types';
import * as Styled from './CardNumberInput.styles';
import { FormInput, Text } from 'components/UI';

const CardNumberInput = ({ onChange, isValid, fontColor, refs }: CardNumberInputProps) => {
  return (
    <Styled.Layout>
      <Styled.Title fontSize="xs" weight="bold" label="카드 번호" />
      <FormInput
        ref={(ref) => (refs.cardNumbers = ref)}
        type="text"
        theme="primary"
        onChange={onChange}
        fontColor={fontColor}
        active={true}
        error={!isValid}
      />
      {!isValid && <Text fontSize="xs" weight="bold" label="카드 번호는 12자리여야 합니다." fontColor="red" />}
    </Styled.Layout>
  );
};

export default CardNumberInput;
