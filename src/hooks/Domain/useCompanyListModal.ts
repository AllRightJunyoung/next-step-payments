import type { CompanyType, CardUIType } from 'types';

const useCompanyListModal = (setCardUI: React.Dispatch<React.SetStateAction<CardUIType>>) => {
  const selectCompanyList = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    const company = target.children[1].textContent as CompanyType;
    setCardUI((prev) => ({
      ...prev,
      company,
    }));
  };

  return { selectCompanyList };
};
export default useCompanyListModal;
