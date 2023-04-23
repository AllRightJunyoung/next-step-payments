import * as Styled from './FormPage.styles';
import { CardForm, CompanyListModal } from '../../components/Domain';
import { getCardCompnayColor } from '../../utils/Card';
import { useUI } from '../../hooks/common';
import { useCardForm } from '../../hooks/Domain';
import useFormPage from '../../hooks/pages/useFormPage';
import { Text, Button, IconButton, PrimaryCard } from '../../components/UI';

const FormPage = () => {
  const { isOpen, setIsOpen } = useUI();

  const {
    cardUI,
    cardFormInputs,
    handleCardNumberInput,
    handleExpireMonthInput,
    handleExpireYearInput,
    handleOwnerNameInput,
    handleCompanyList,
  } = useCardForm();

  const { handleBackButton, submit } = useFormPage({
    cardUI,
    formRefs: cardFormInputs,
  });

  return (
    <Styled.Layout>
      <Styled.Header>
        <IconButton onClick={handleBackButton} name="arrowLeft" size="2xl" color="#575757" />
        <Text fontSize="lg" weight="bold" label="카드추가" />
      </Styled.Header>
      <div>
        {isOpen && <CompanyListModal onSelectCompanyList={handleCompanyList} onClose={setIsOpen} />}
        <PrimaryCard
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
          <Button fontSize="m" onClick={submit} label="Next" />
        </Styled.ButtonBox>
      </div>
    </Styled.Layout>
  );
};

export default FormPage;
