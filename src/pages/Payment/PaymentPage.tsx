import * as Styled from './PaymentPage.styles';
import { Text, PrimaryCard } from '../../components/UI';
import { getCardCompnayColor } from '../../utils/Card';

const PaymentPage = () => {
  return (
    <Styled.Layout>
      {/* <Styled.TextWrapper>
          <Text fontSize="lg" weight="bold" label="결제 하기"></Text>
        </Styled.TextWrapper>
        <Styled.CardWrapper>
          <PrimaryCard
            id=""
            size="big"
            color={getCardCompnayColor(currentCard.company)}
            company={currentCard.company}
            number={currentCard.cardNumbers}
            expireMonth={currentCard.expireDate.month}
            expireYear={currentCard.expireDate.year}
            ownerName={currentCard.ownerName}
          />
        </Styled.CardWrapper>
        <Styled.Box>
          <Text fontSize="s" weight="normal" label={`${inputLength}/10`} />
        </Styled.Box>
        <Styled.ButtonWrapper>
          <Button fontSize="lg" label="Next" onClick={handleSubmit} />
        </Styled.ButtonWrapper> */}
    </Styled.Layout>
  );
};

export default PaymentPage;
