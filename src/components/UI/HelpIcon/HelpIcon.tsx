import * as Styled from './HelpIcon.styles';
import { IconButton } from 'components/UI';
import { useUI } from 'hooks/common';

const HelpIcon = () => {
  const { isOpen, setIsOpen } = useUI();

  return (
    <Styled.Layout>
      {isOpen && <Styled.ToolTip>카드 뒤 3자리</Styled.ToolTip>}
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
