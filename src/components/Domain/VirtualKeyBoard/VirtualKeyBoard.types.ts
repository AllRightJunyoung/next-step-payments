import type { VirtualKeyBoardUIType } from '../../../hooks/Domain/useVirtualKeyBoard';

export type VirtualKeyBoardProps = {
  isOpen: boolean;
  ui: VirtualKeyBoardUIType;
  handleKeyBoard?: (e: React.MouseEvent<Element, MouseEvent>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  deleteInput?: () => void;
  clearInput?: () => void;
};
