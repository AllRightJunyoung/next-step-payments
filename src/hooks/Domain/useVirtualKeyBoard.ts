import { useContext, useEffect, useRef, useState } from 'react';
import { isValidPasswordNumber, isValidSecurityCode } from '../../utils/InputValidation';
import type { CardFormInputRefsType } from '../../types';
export type VirtualKeyBoardUIType = 'cvc' | 'password';

const useVirtualKeyBoard = (
  formInputRef: CardFormInputRefsType,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const [ui, setUIState] = useState<VirtualKeyBoardUIType>('cvc');

  const handleKeyBoard = (e: React.MouseEvent) => {
    if (!passwordRef.current) return;
    const target = e.target as HTMLInputElement;
    const currentValue = passwordRef.current.value;
    const nextValue = currentValue + target.value;
    passwordRef.current.value = nextValue;
    if (ui === 'cvc' && isValidSecurityCode(nextValue)) {
      if (!formInputRef.cvc) return;

      formInputRef.cvc.value = nextValue;

      setIsOpen(false);
    } else if (ui === 'password' && isValidPasswordNumber(nextValue)) {
      if (!formInputRef.password) return;
      formInputRef.password.value = nextValue;
      setIsOpen(false);
    }
  };
  const deleteInput = () => {
    if (!passwordRef.current) return;
    const currentPassword = passwordRef.current.value;
    const nextPassword = currentPassword.slice(0, currentPassword.length - 1);
    passwordRef.current.value = nextPassword;
  };
  const clearInput = () => {
    if (!passwordRef.current) return;
    passwordRef.current.value = '';
  };

  const setUI = (type: VirtualKeyBoardUIType) => {
    setUIState(type);
    setIsOpen(true);
  };

  return { passwordRef, clearInput, deleteInput, setUI, handleKeyBoard, ui };
};

export default useVirtualKeyBoard;
