import { createContext, useState } from 'react';
import { CardType } from '../types';

type CardContextType = {
  cardList: CardType[];
  selectedCard: CardType;
  addCard: (card: CardType) => void;
  updateAlias: (card: CardType) => void;
  removeCard: (card: CardType) => void;
  selectCard: (card: CardType) => void;
};

export const CardContext = createContext<CardContextType>({
  cardList: [],
  selectedCard: {
    cardNumbers: '',
    expireDate: {
      month: '',
      year: '',
    },
    ownerName: '',
    company: '',
    alias: '',
    id: '',
  },
  addCard: function (card: CardType) {},
  updateAlias: function (card: CardType) {},
  removeCard: function (card: CardType) {},
  selectCard: function (card: CardType) {},
});

interface ProviderProps {
  children: React.ReactNode;
}
const emptyCard = {
  cardNumbers: '',
  expireDate: {
    month: '',
    year: '',
  },
  ownerName: '',
  company: '',
  alias: '',
  id: '',
} as CardType;

export const CardContextProvider = ({ children }: ProviderProps) => {
  const [cardList, setCardList] = useState<CardType[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardType>(emptyCard);
  // 카드 리스트에 추가
  const addCard = (currentCard: CardType) => {
    setCardList((prevCardList) => [...prevCardList, currentCard]);
  };

  // 카드 별칭 업데이트
  const updateAlias = (currentCard: CardType) => {
    const newCardList = cardList.map((card) => {
      if (currentCard.id === card.id) {
        return {
          ...currentCard,
        };
      }
      return card;
    });
    setCardList(newCardList);
  };

  // 카드 삭제
  const removeCard = (currentCard: CardType) => {
    const newCardList = cardList.filter((card) => card.id !== currentCard.id);
    setCardList(newCardList);
  };
  // 카드 선택
  const selectCard = (currentCard: CardType) => {
    setSelectedCard(currentCard);
  };

  const context = {
    cardList,
    selectedCard,
    addCard,
    updateAlias,
    removeCard,
    selectCard,
  };
  return <CardContext.Provider value={context}>{children}</CardContext.Provider>;
};
