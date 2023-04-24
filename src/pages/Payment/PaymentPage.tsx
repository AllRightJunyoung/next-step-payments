import * as Styled from './PaymentPage.styles';
import { Text, PrimaryCard, Button } from '../../components/UI';
import { getCardCompnayColor } from '../../utils/Card';
import usePrimaryCard from '../../hooks/Domain/usePrimaryCard';
import { useUI } from '../../hooks/common';
import { useVirtualKeyBoard } from '../../hooks/Domain';
import { CardSecurity, CardPasswordInput } from '../../components/Domain/CardFormInput';
import { VirtualKeyBoard } from '../../components/Domain';

import useCardForm from '../../hooks/Domain/useCardForm';
import IconButton from '../../components/UI/IconButton/IconButton';
import usePaymentPage from '../../hooks/pages/usePaymentPage';

const PaymentPage = () => {
  const { myCard } = usePrimaryCard();
  const { isOpen, setIsOpen } = useUI();
  const { cardFormInputs } = useCardForm();
  const { ref, clearInput, deleteInput, handleKeyBoard, ui, setUI } = useVirtualKeyBoard(cardFormInputs, setIsOpen);
  const { home, order } = usePaymentPage(cardFormInputs);

  return (
    <Styled.Layout>
      <Styled.Header>
        <IconButton name="arrowLeft" size="2x" color="#575757" onClick={home} />
        <Text fontSize="lg" weight="bold" label="결제 하기" />
      </Styled.Header>
      <Styled.CardWrapper>
        <PrimaryCard
          size="big"
          color={getCardCompnayColor(myCard.company)}
          company={myCard.company}
          number={myCard.cardNumbers}
          expireMonth={myCard.expireDate.month}
          expireYear={myCard.expireDate.year}
          ownerName={myCard.ownerName}
        />
      </Styled.CardWrapper>
      <Styled.InputWrapper>
        <CardSecurity
          fontColor={getCardCompnayColor(myCard.company)}
          refs={cardFormInputs}
          setVirtualKeyBoardUI={setUI}
        />
        <CardPasswordInput
          fontColor={getCardCompnayColor(myCard.company)}
          refs={cardFormInputs}
          setVirtualKeyBoardUI={setUI}
        />
      </Styled.InputWrapper>
      <VirtualKeyBoard
        isOpen={isOpen}
        ui={ui}
        handleKeyBoard={handleKeyBoard}
        clearInput={clearInput}
        deleteInput={deleteInput}
        inputRef={ref}
      />
      <Styled.ButtonWrapper>
        <Styled.LongButton fontSize="lg" label="결제" onClick={order} />
      </Styled.ButtonWrapper>
    </Styled.Layout>
  );
};

export default PaymentPage;
