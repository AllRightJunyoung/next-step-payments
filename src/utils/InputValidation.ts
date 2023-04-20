import type { CardValidationType } from '../types';
import { reportError, ValidationError } from '../utils/error';
export const isCardFormValidation = (form: CardValidationType) => {
  const isValid =
    isValidCardNumber(form.cardNumbers) &&
    isValidCompany(form.company) &&
    isValidOwnerName(form.ownerName) &&
    isValidExpirationMonth(form.expireDateMonth) &&
    isValidExpirationYear(form.expireDateYear) &&
    isValidPasswordNumber(form.password) &&
    isValidSecurityCode(form.cvc);

  try {
    if (!isValid) throw new ValidationError('입력하지 않거나 올바르지 않은 양식을 확인하시오 !');
  } catch (error) {
    reportError(error);
  }
  return isValid;
};

export const isValidExpirationMonth = (date: string) => {
  return date.length === 2;
};
export const isValidExpirationYear = (date: string) => {
  if (date.length !== 2 || parseInt(date) < 23) {
    return false;
  }
  return true;
};

export const isValidCompany = (company: string) => {
  if (!company.length) return false;
  return true;
};
export const isValidSecurityCode = (code: string) => {
  return code.length === 3;
};
export const isValidCardNumber = (cardNumber: string) => {
  return cardNumber.length === 19;
};

export const isValidPasswordNumber = (password: string) => {
  return password.length === 4;
};
export const isValidOwnerName = (ownerName: string) => {
  if (ownerName.length >= 3 && isNaN(parseInt(ownerName))) {
    return true;
  }
  return false;
};

type UIType = 'password' | 'cardNumber' | 'securityCode' | 'company' | 'year' | 'month' | 'ownerName';

export const isValidFormUI = (value: string, type: UIType) => {
  if (!value.length) return true;
  switch (type) {
    case 'password':
      return isValidPasswordNumber(value);
    case 'cardNumber':
      return isValidCardNumber(value);
    case 'securityCode':
      return isValidSecurityCode(value);
    case 'company':
      return isValidCompany(value);
    case 'year':
      return isValidExpirationYear(value);
    case 'month':
      return isValidExpirationMonth(value);
    case 'ownerName':
      return isValidOwnerName(value);
    default:
      break;
  }
  return false;
};
