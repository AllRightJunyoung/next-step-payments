import { ColorType, CardFormInputRefsType } from '../../../../types';
import type { VirtualKeyBoardUIType } from '../../../../hooks/Domain/useVirtualKeyBoard';

export type CardPasswordInputProps = {
  fontColor: ColorType;
  refs: CardFormInputRefsType;
  setVirtualKeyBoardUI: (type: VirtualKeyBoardUIType) => void;
};
