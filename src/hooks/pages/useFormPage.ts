import { CardUIType, CardFormInputRefsType, CardType } from '../../types';
import { useContext } from 'react';
import { CardContext } from '../../context/Card';
import { isCardFormValidation } from '../../utils/InputValidation';
import uuid from 'react-uuid';
import usePage from '../../pages/usePage';

interface PropsType {
  cardUI: CardUIType;
  formRefs: CardFormInputRefsType;
}

const useFormPage = ({ cardUI, formRefs }: PropsType) => {
  const cardCtx = useContext(CardContext);
  const { setPage, page } = usePage();

  const handleBackButton = () => {
    setPage('MyCardList');
  };

  const submit = () => {
    if (!formRefs.password || !formRefs.cvc) return;
    const newCardValidation = { ...cardUI, password: formRefs.password.value, cvc: formRefs.cvc.value };
    if (!isCardFormValidation(newCardValidation)) return;

    const newCard: CardType = {
      cardNumbers: newCardValidation.cardNumbers,
      expireDate: {
        month: newCardValidation.expireDateMonth,
        year: newCardValidation.expireDateYear,
      },
      ownerName: newCardValidation.ownerName,
      company: newCardValidation.company,
      alias: '',
      password: newCardValidation.password,
      cvc: newCardValidation.cvc,
      id: uuid(),
    };
    cardCtx.addCard(newCard);
    cardCtx.selectCard(newCard);
    setPage('Alias');
  };

  return {
    page,
    handleBackButton,
    submit,
  };
};

export default useFormPage;
