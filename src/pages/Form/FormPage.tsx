import * as Styled from './FormPage.styles';
import { CardForm, CompanyListModal } from 'components/Domain';
import { getCardCompnayColor } from 'utils/Card';
import { useUI } from 'hooks/common';
import { useCardFormInput } from 'hooks/Domain';
import { useCardUI } from 'hooks/UI';
import useFormPage from 'hooks/pages/useFormPage';

const FormPage = () => {
  const { isOpen, setIsOpen } = useUI();
  const { cardUI, setCardUI } = useCardUI();
  const cardUIState = {
    cardUIState: cardUI,
    setCardUIState: setCardUI,
  };

  const { cardFormInputs, handleCardNumberInput, handleExpireMonthInput, handleExpireYearInput, handleOwnerNameInput } =
    useCardFormInput(cardUIState);

  const { handleBackButton, submit } = useFormPage({
    ...cardUIState,
    formRefs: cardFormInputs,
  });

  return (
    <Styled.Layout>
      <Styled.Header>
        <Styled.LeftButton onClick={handleBackButton} name="arrowLeft" size="2xl" color="#575757" />
        <Styled.FormPageText fontSize="lg" weight="bold" label="카드추가" />
      </Styled.Header>
      <div>
        {isOpen && <CompanyListModal setCardUIState={setCardUI} onClose={setIsOpen} />}
        <Styled.FormPageCard
          type="primary"
          onClick={() => setIsOpen(true)}
          color={getCardCompnayColor(cardUI.company)}
          company={cardUI.company}
          size="small"
          number={cardUI.cardNumbers}
          expireMonth={cardUI.expireDateMonth}
          expireYear={cardUI.expireDateYear}
          ownerName={cardUI.ownerName}
        />
        <CardForm
          cardUI={cardUI}
          refs={cardFormInputs}
          onCardNumberInput={handleCardNumberInput}
          onExpireMonthInput={handleExpireMonthInput}
          onExpireYearInput={handleExpireYearInput}
          onOwnerNameInput={handleOwnerNameInput}
        />
        <Styled.ButtonBox>
          <Styled.NextButton fontSize="m" onClick={submit} label="Next" />
        </Styled.ButtonBox>
      </div>
    </Styled.Layout>
  );
};

export default FormPage;
