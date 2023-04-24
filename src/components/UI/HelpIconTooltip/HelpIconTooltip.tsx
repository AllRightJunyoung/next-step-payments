import * as Styled from './HelpIconTooltip.styles';
import { IconButton } from '..';
import { useUI } from '../../../hooks/common';
import type { HelpProps } from './HelpIconTooltiptypes';

const HelpIconTooltip = ({ children, ...attribute }: HelpProps) => {
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
export default HelpIconTooltip;
