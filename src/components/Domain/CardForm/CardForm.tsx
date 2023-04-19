import { VirtualKeyBoard } from '../../../components/Domain';
import {
  CardNumberInput,
  CardExpirationDateInput,
  CardOwnerNameInput,
  CardSecurity,
  CardPasswordInput,
} from '../CardFormInput';

import type { CardFormProps } from './CardForm.types';
import { isValidFormUI } from '../../../utils/InputValidation';
import { getCardCompnayColor } from '../../../utils/Card';

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
        isValid={isValidFormUI(cardUI.cardNumbers, 'cardNumber')}
        fontColor={cardColor}
        refs={refs}
      />
      <CardExpirationDateInput
        onChangeMonth={onExpireMonthInput}
        onChangeYear={onExpireYearInput}
        fontColor={cardColor}
        refs={refs}
        isValidMonth={isValidFormUI(cardUI.expireDateMonth, 'month')}
        isValidYear={isValidFormUI(cardUI.expireDateYear, 'year')}
      />
      <CardOwnerNameInput
        onChange={onOwnerNameInput}
        fontColor={cardColor}
        refs={refs}
        length={cardUI.ownerName.length}
        isValid={isValidFormUI(cardUI.ownerName, 'ownerName')}
      />
      <VirtualKeyBoard refs={refs} />
      <CardSecurity fontColor={cardColor} refs={refs} />
      <CardPasswordInput fontColor={cardColor} refs={refs} />
    </div>
  );
};

export default CardForm;
