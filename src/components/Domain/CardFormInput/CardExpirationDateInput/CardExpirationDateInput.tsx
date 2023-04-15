import { CardExpirationDateInputProps } from './CardExpirationDateInput.types';
import * as Styled from './CardExpirationDateInput.styles';
import { FormInput, Text } from 'components/UI';

const CardExpirationDateInput = ({
  onChangeMonth,
  onChangeYear,
  fontColor,
  refs,
  isValidMonth,
  isValidYear,
}: CardExpirationDateInputProps) => {
  const isValid = isValidMonth && isValidYear;

  return (
    <Styled.Layout>
      <Styled.Title fontSize="xs" weight="bold" label="만료일" />
      <Styled.Container>
        <FormInput
          type="text"
          placeholder="MM"
          theme="primary"
          onChange={onChangeMonth}
          ref={(ref) => (refs.expireDateMonth = ref)}
          fontColor={fontColor}
          active={true}
          error={!isValidMonth}
        />
        <FormInput
          type="text"
          placeholder="YY"
          theme="primary"
          onChange={onChangeYear}
          ref={(ref) => (refs.expireDateYear = ref)}
          fontColor={fontColor}
          active={true}
          error={!isValidYear}
        />
      </Styled.Container>
      {!isValid && (
        <Text fontSize="xs" weight="bold" label="2자리씩 입력하세요. MM (01~12) / YY (23~) " fontColor="red" />
      )}
    </Styled.Layout>
  );
};

export default CardExpirationDateInput;
