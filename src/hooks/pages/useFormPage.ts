import { CardUIType, CardFormInputRefsType } from '../../types';
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
    const currentFormCard = cardUI;
    const newCardValidation = { ...cardUI, password: formRefs.password.value, cvc: formRefs.cvc.value };
    if (!isCardFormValidation(newCardValidation)) return;

    const newCard = {
      cardNumbers: currentFormCard.cardNumbers,
      expireDate: {
        month: currentFormCard.expireDateMonth,
        year: currentFormCard.expireDateYear,
      },
      ownerName: currentFormCard.ownerName,
      company: currentFormCard.company,
      alias: '',
      id: uuid(),
    };
    cardCtx.addCard(newCard);
    localStorage.setItem('id', newCard.id);
    setPage('Alias');
  };

  return {
    page,
    handleBackButton,
    submit,
  };
};

export default useFormPage;
