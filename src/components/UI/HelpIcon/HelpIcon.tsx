import * as Styled from './HelpIcon.styles';
import { IconButton } from 'components/UI';
import { useUI } from 'hooks/common';
import type { HelpProps } from './HelpIcon.types';

const HelpIcon = ({ children, ...attribute }: HelpProps) => {
  const { isOpen, setIsOpen } = useUI();

  return (
    <Styled.Layout>
      {isOpen && <Styled.ToolTip {...attribute}>{children}</Styled.ToolTip>}
      <IconButton
        name="help"
        size="2x"
        color="black"
        onMouseOver={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      />
    </Styled.Layout>
  );
};
export default HelpIcon;
