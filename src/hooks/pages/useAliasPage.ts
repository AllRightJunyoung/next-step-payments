import { CardContext } from '../../context/Card';
import { useRef, useContext, useState, useEffect } from 'react';
import { changeAliasLength } from '../../utils/InputChange';
import usePage from '../../pages/usePage';
import { usePrimaryCard } from '../../hooks/Domain';
import { AppContext } from '../../context/App';

const useAliasPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputLength, setInputLength] = useState(0);
  const cardCtx = useContext(CardContext);
  const appCtx = useContext(AppContext);
  const { myCard } = usePrimaryCard();
  const { setPage } = usePage();

  useEffect(() => {
    appCtx.setPayment(false);
  }, []);

  const handleSubmit = () => {
    if (inputRef.current === null || !myCard) return;
    const aliasValue = inputRef.current.value;
    const aliasName = aliasValue.length ? aliasValue : myCard.company;
    const aliasCard = {
      ...myCard,
      alias: aliasName,
    };
    cardCtx.updateAlias(aliasCard);
    setPage('MyCardList');
  };

  const handleInput = () => {
    if (inputRef.current === null) return;
    inputRef.current.value = changeAliasLength(inputRef.current.value);
    const length = inputRef.current.value.length;
    setInputLength(length);
  };
  return { handleSubmit, handleInput, myCard, inputRef, inputLength };
};

export default useAliasPage;
