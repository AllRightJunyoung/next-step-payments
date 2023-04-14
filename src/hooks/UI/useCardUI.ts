import { useState } from 'react';
import { CardUIType } from 'types';

const initialCardCardUI: CardUIType = {
  cardNumbers: '',
  expireDateMonth: '',
  expireDateYear: '',
  ownerName: '',
  company: '',
};
const useCardUI = () => {
  const [cardUI, setCardUI] = useState(initialCardCardUI);
  return { cardUI, setCardUI };
};
export default useCardUI;
