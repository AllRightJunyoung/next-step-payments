import { useRef } from 'react';
import * as Styled from './CompanyListModal.styles';
import type { CompanyListModalProps } from './CompanyListModal.types';
import { Dot } from 'components/UI';
import { useOutsideClick } from 'hooks/common';
import { useCompanyListModal } from 'hooks/Domain';

const CompanyListModal = ({ setCardUIState, onClose }: CompanyListModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, onClose);

  const { selectCompanyList } = useCompanyListModal(setCardUIState);

  return (
    <Styled.Overlay>
      <Styled.Layout ref={ref}>
        <Styled.Container>
          <Dot color="red" value="하나카드" onClick={selectCompanyList} />
          <Dot color="pink" value="국민카드" onClick={selectCompanyList} />
          <Dot color="cyon" value="신한카드" onClick={selectCompanyList} />
          <Dot color="purple" value="클린카드" onClick={selectCompanyList} />
        </Styled.Container>
        <Styled.Container>
          <Dot color="blue" value="토스카드" onClick={selectCompanyList} />
          <Dot color="green" value="네이버카드" onClick={selectCompanyList} />
          <Dot color="yellow" value="카카오카드" onClick={selectCompanyList} />
          <Dot color="orange" value="오렌지카드" onClick={selectCompanyList} />
        </Styled.Container>
      </Styled.Layout>
    </Styled.Overlay>
  );
};

export default CompanyListModal;
