import * as Styled from './KeyBoardIconTooltip.styles';
import type { KeyBoardIconTooltipProps } from './KeyBoardIconTooltip.types';
import { useUI } from '../../../hooks/common';
import { IconButton } from '..';

const KeyBoardIconTooltip = ({ onClick }: KeyBoardIconTooltipProps) => {
  const { isOpen, setIsOpen } = useUI();

  return (
    <Styled.Root>
      {isOpen && <Styled.ToolTip>가상 키보드</Styled.ToolTip>}
      <IconButton
        name="keyboard"
        size="2x"
        color="black"
        onClick={onClick}
        onMouseOver={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      />
    </Styled.Root>
  );
};

export default KeyBoardIconTooltip;
