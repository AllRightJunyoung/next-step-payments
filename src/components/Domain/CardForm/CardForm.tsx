import { VirtualKeyBoard } from 'components/Domain';
import {
  CardNumberInput,
  CardExpirationDateInput,
  CardOwnerNameInput,
  CardSecurity,
  CardPasswordInput,
} from '../CardFormInput';

import type { CardFormProps } from './CardForm.types';
import { isValidCardNumber, isValidExpirationDate } from 'utils/InputValidation';
import { getCardCompnayColor } from 'utils/Card';

const CardForm = ({
  cardUI,
  refs,
  onCardNumberInput,
  onExpireMonthInput,
  onExpireYearInput,
  onOwnerNameInput,
}: CardFormProps) => {
  const cardColor = getCardCompnayColor(cardUI.company);
  return (
    <div>
      <CardNumberInput
        onChange={onCardNumberInput}
        isValid={cardUI.cardNumbers.length === 0 ? true : isValidCardNumber(cardUI.cardNumbers)}
        fontColor={cardColor}
        refs={refs}
      />
      <CardExpirationDateInput
        onChangeMonth={onExpireMonthInput}
        onChangeYear={onExpireYearInput}
        fontColor={cardColor}
        refs={refs}
        isValidMonth={cardUI.expireDateMonth.length === 0 ? true : isValidExpirationDate(cardUI.expireDateMonth)}
        isValidYear={cardUI.expireDateYear.length === 0 ? true : isValidExpirationDate(cardUI.expireDateYear)}
      />
      <CardOwnerNameInput
        onChange={onOwnerNameInput}
        fontColor={cardColor}
        refs={refs}
        length={cardUI.ownerName.length}
      />
      <VirtualKeyBoard refs={refs} />
      <CardSecurity fontColor={cardColor} refs={refs} />
      <CardPasswordInput fontColor={cardColor} refs={refs} />
    </div>
  );
};

export default CardForm;
