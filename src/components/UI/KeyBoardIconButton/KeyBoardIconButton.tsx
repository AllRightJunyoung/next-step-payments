import * as Styled from './KeyBoardIconButton.styles';
import type { KeyBoardIconButtonProps } from './KeyBoardIconButton.types';
import { useUI } from '../../../hooks/common';
import { IconButton } from '../../../components/UI';

const KeyBoardIconButton = ({ onClick }: KeyBoardIconButtonProps) => {
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

export default KeyBoardIconButton;
