import { CardFormInputRefsType, CardUIType, CompanyType } from 'types';
import { useRef, useState } from 'react';
import { changeCardNumber, changeMonth, changeOwnerName, changeYear } from 'utils/InputChange';
import { isValidCardNumber, isValidExpirationMonth, isValidExpirationYear } from 'utils/InputValidation';
import { getCardNumberCompnay } from 'utils/Card';

const initialCardCardUI: CardUIType = {
  cardNumbers: '',
  expireDateMonth: '',
  expireDateYear: '',
  ownerName: '',
  company: '',
};

const useCardForm = () => {
  const inputRefs = useRef(new Array(10));
  const [cardUI, setCardUI] = useState(initialCardCardUI);

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
    setCardUI((prev) => ({
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
    if (isValidExpirationMonth(month)) {
      yearRef.focus();
    }
    setCardUI((prev) => ({
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
    if (isValidExpirationMonth(year)) {
      yearRef.focus();
    }
    if (isValidExpirationMonth(month) && isValidExpirationYear(year)) {
      ownerNameRef?.focus();
    }
    setCardUI((prev) => ({
      ...prev,
      expireDateYear: year,
    }));
  };

  const handleOwnerNameInput = () => {
    const ownerNameRef = cardFormInputs.ownerName;
    if (!ownerNameRef) return;
    const ownerName = changeOwnerName(ownerNameRef.value);
    ownerNameRef.value = ownerName;
    setCardUI((prev) => ({
      ...prev,
      ownerName,
    }));
  };

  const handleCompanyList = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    const company = target.children[1].textContent as CompanyType;
    setCardUI((prev) => ({
      ...prev,
      company,
    }));
  };

  return {
    cardFormInputs,
    handleCardNumberInput,
    handleExpireMonthInput,
    handleExpireYearInput,
    handleOwnerNameInput,
    handleCompanyList,
    cardUI,
  };
};
export default useCardForm;
