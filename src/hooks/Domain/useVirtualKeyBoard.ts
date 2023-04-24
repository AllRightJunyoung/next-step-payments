import { useRef, useState } from 'react';
import { isValidPasswordNumber, isValidSecurityCode } from '../../utils/InputValidation';
import type { VirtualKeyBoardRefsType } from '../../types';
export type VirtualKeyBoardUIType = 'cvc' | 'password';

const useVirtualKeyBoard = (
  formInputRef: VirtualKeyBoardRefsType,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const ref = useRef<HTMLInputElement>(null);
  const [ui, setUIState] = useState<VirtualKeyBoardUIType>('cvc');

  const handleKeyBoard = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const target = e.target as HTMLInputElement;
    const currentValue = ref.current.value;
    const nextValue = currentValue + target.value;
    ref.current.value = nextValue;
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
    if (!ref.current) return;
    const currentPassword = ref.current.value;
    const nextPassword = currentPassword.slice(0, currentPassword.length - 1);
    ref.current.value = nextPassword;
  };
  const clearInput = () => {
    if (!ref.current) return;
    ref.current.value = '';
  };

  const setUI = (type: VirtualKeyBoardUIType) => {
    setUIState(type);
    setIsOpen(true);
  };

  return { ref, clearInput, deleteInput, setUI, handleKeyBoard, ui };
};

export default useVirtualKeyBoard;
