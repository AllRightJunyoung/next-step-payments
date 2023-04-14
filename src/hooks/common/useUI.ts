import { useState } from 'react';

const useUi = () => {
  const [isOpen, setIsOpen] = useState(false);
  return { isOpen, setIsOpen };
};
export default useUi;
