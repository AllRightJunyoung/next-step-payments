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
import { useUI } from '../../../hooks/common';
import useVirtualKeyBoard from '../../../hooks/Domain/useVirtualKeyBoard';

const CardForm = ({
  cardUI,
  refs,
  onCardNumberInput,
  onExpireMonthInput,
  onExpireYearInput,
  onOwnerNameInput,
}: CardFormProps) => {
  const cardColor = getCardCompnayColor(cardUI.company);
  const { isOpen, setIsOpen } = useUI();
  const { passwordRef, clearInput, deleteInput, handleKeyBoard, ui, setUI } = useVirtualKeyBoard(refs, setIsOpen);

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
      <VirtualKeyBoard
        isOpen={isOpen}
        ui={ui}
        handleKeyBoard={handleKeyBoard}
        clearInput={clearInput}
        deleteInput={deleteInput}
        passwordRef={passwordRef}
      />
      <CardSecurity fontColor={cardColor} refs={refs} setVirtualKeyBoardUI={setUI} />
      <CardPasswordInput fontColor={cardColor} refs={refs} setVirtualKeyBoardUI={setUI} />
    </div>
  );
};

export default CardForm;
