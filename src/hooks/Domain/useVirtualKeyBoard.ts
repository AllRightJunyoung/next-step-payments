import { VirtualKeyBoardContext } from 'context/VirtualKeyBoard';
import { useContext, useRef } from 'react';
import { isValidPasswordNumber, isValidSecurityCode } from 'utils/InputValidation';
import type { CardFormInputRefsType } from 'types';
type ModeType = 'cvc' | 'password';

const useVirtualKeyBoard = (formInputRef: CardFormInputRefsType) => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const ctx = useContext(VirtualKeyBoardContext);
  const isOpen = ctx.isOpen;
  const mode = ctx.mode;

  const handleKeyBoard = (e: React.MouseEvent) => {
    if (!passwordRef.current) return;
    const target = e.target as HTMLInputElement;
    const currentValue = passwordRef.current.value;
    const nextValue = currentValue + target.value;
    passwordRef.current.value = nextValue;

    if (mode === 'cvc' && isValidSecurityCode(nextValue)) {
      if (!formInputRef.cvc) return;
      formInputRef.cvc.value = nextValue;
      ctx.hide();
    } else if (mode === 'password' && isValidPasswordNumber(nextValue)) {
      if (!formInputRef.password) return;
      formInputRef.password.value = nextValue;
      ctx.hide();
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

  const showUI = (type: ModeType) => {
    ctx.setUI(type);
    ctx.show();
  };

  return { passwordRef, clearInput, deleteInput, showUI, isOpen, mode, handleKeyBoard };
};

export default useVirtualKeyBoard;
