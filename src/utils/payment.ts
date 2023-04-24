import type { CardType } from '../types';

type UserInfoType = Partial<CardType>;

export const isValidUserCard = (card: CardType, userInfo: UserInfoType) => {
  return card.password === userInfo.password && card.cvc === userInfo.cvc ? true : false;
};
