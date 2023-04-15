import { CardUIType, CardFormInputRefsType } from 'types';
import { useContext } from 'react';
import { PaymentsContext } from 'context/Payments';
import { isCardFormValidation } from 'utils/InputValidation';
import uuid from 'react-uuid';
import useRouter from 'routes/useRouter';

interface PropsType {
  cardUI: CardUIType;
  formRefs: CardFormInputRefsType;
}

const useFormPage = ({ cardUI, formRefs }: PropsType) => {
  const paymentsCtx = useContext(PaymentsContext);

  const { push } = useRouter();

  const handleBackButton = () => {
    push('/');
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
    paymentsCtx.addCard(newCard);
    localStorage.setItem('id', newCard.id);
    push('/alias');
  };

  return {
    handleBackButton,
    submit,
  };
};

export default useFormPage;
