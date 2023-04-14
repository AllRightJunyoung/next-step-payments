import { RefObject, useEffect } from 'react';

const useOutsideClick = (ref: RefObject<any>, handler: React.Dispatch<React.SetStateAction<any>>) => {
  useEffect(() => {
    document.addEventListener('mousedown', handleOutside);

    return () => {
      document.removeEventListener('mousedown', handleOutside);
    };
  }, []);

  const handleOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (ref.current?.contains(target)) return;
    handler(false);
  };

  return { handleOutside };
};

export default useOutsideClick;
