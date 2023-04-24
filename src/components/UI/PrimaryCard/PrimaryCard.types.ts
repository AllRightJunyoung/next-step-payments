import { ColorType, CompanyType } from '../../../types';
import { ReactEventHandler } from 'react';
export type PrimaryCardProps = {
  size: 'small' | 'big';
  className?: string;
  id: string;
  number: string;
  expireMonth: string;
  expireYear: string;
  ownerName: string;
  color: ColorType;
  company: CompanyType;
  onClick?: ReactEventHandler<HTMLDivElement>;
};

export type ContainerProps = Partial<PrimaryCardProps>;
