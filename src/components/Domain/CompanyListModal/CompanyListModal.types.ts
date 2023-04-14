import type { CardUIType } from 'types';

export type CompanyListModalProps = {
  setCardUIState: React.Dispatch<React.SetStateAction<CardUIType>>;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
};
