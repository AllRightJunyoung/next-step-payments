import { CardContext } from '../../context/Card';
import { useRef, useContext, useState } from 'react';
import { changeAliasLength } from '../../utils/InputChange';
import usePage from '../../pages/usePage';
import { usePrimaryCard } from '../../hooks/Domain';

const useAliasPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputLength, setInputLength] = useState(0);
  const cardCtx = useContext(CardContext);
  const { getCard } = usePrimaryCard();
  const myCard = getCard();

  const { setPage } = usePage();

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
