import { CardFormInputRefsType } from '../../../types';
import type { VirtualKeyBoardUIType } from '../../../hooks/Domain/useVirtualKeyBoard';

export type VirtualKeyBoardProps = {
  isOpen: boolean;
  ui: VirtualKeyBoardUIType;
  handleKeyBoard?: (e: React.MouseEvent<Element, MouseEvent>) => void;
  passwordRef?: React.RefObject<HTMLInputElement>;
  deleteInput?: () => void;
  clearInput?: () => void;
};
