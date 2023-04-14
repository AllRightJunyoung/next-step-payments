import { CardFormInputRefsType, CardUIType } from 'types';
import { useRef } from 'react';
import { changeCardNumber, changeMonth, changeOwnerName, changeYear } from 'utils/InputChange';
import { isValidCardNumber, isValidExpirationDate } from 'utils/InputValidation';
import { getCardNumberCompnay } from 'utils/Card';
interface PropsType {
  cardUIState: CardUIType;
  setCardUIState: React.Dispatch<React.SetStateAction<CardUIType>>;
}
const useCardFormInput = ({ cardUIState, setCardUIState }: PropsType) => {
  const inputRefs = useRef(new Array(10));

  const cardFormInputs: CardFormInputRefsType = {
    cardNumbers: inputRefs.current[0],
    expireDateMonth: inputRefs.current[1],
    expireDateYear: inputRefs.current[2],
    ownerName: inputRefs.current[3],
    cvc: inputRefs.current[4],
    password: inputRefs.current[5],
  };

  const handleCardNumberInput = () => {
    const ref = cardFormInputs.cardNumbers;
    if (!ref) return;
    const cardNumbers = changeCardNumber(ref.value);
    const cardCompany = getCardNumberCompnay(cardNumbers[0]);
    ref.value = cardNumbers;
    const isNext = isValidCardNumber(cardNumbers);
    if (isNext) {
      cardFormInputs.expireDateMonth?.focus();
    }
    setCardUIState((prev) => ({
      ...prev,
      cardNumbers: cardNumbers,
      company: cardCompany,
    }));
  };
  const handleExpireMonthInput = () => {
    const monthRef = cardFormInputs.expireDateMonth;
    const yearRef = cardFormInputs.expireDateYear;
    if (!monthRef) return;
    const month = changeMonth(monthRef.value);
    monthRef.value = month;
    if (!yearRef) return;
    if (isValidExpirationDate(month)) {
      yearRef.focus();
    }
    setCardUIState((prev) => ({
      ...prev,
      expireDateMonth: !month.length ? 'MM' : month,
    }));
  };

  const handleExpireYearInput = () => {
    const monthRef = cardFormInputs.expireDateMonth;
    const yearRef = cardFormInputs.expireDateYear;
    const ownerNameRef = cardFormInputs.ownerName;
    if (!yearRef) return;
    const year = changeYear(yearRef.value);
    yearRef.value = year;
    if (!monthRef) return;
    const month = changeMonth(monthRef.value);
    if (isValidExpirationDate(year)) {
      yearRef.focus();
    }
    if (isValidExpirationDate(month) && isValidExpirationDate(year)) {
      ownerNameRef?.focus();
    }
    setCardUIState((prev) => ({
      ...prev,
      expireDateYear: year,
    }));
  };

  const handleOwnerNameInput = () => {
    const ownerNameRef = cardFormInputs.ownerName;
    if (!ownerNameRef) return;
    const ownerName = changeOwnerName(ownerNameRef.value);
    ownerNameRef.value = ownerName;
    setCardUIState((prev) => ({
      ...prev,
      ownerName: ownerName.length ? ownerName : 'Name',
    }));
  };

  return {
    cardFormInputs,
    handleCardNumberInput,
    handleExpireMonthInput,
    handleExpireYearInput,
    handleOwnerNameInput,
  };
};
export default useCardFormInput;
