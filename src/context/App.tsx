import { createContext, useState } from 'react';

export type AppPage = 'MyCardList' | 'Alias' | 'Form' | 'Payment';

type AppContextType = {
  page: AppPage;
  changePage: (type: AppPage) => void;
};

export const AppContext = createContext<AppContextType>({
  page: 'MyCardList',
  changePage: function (type: AppPage) {},
});

interface ProviderProps {
  children: React.ReactNode;
}

export const AppContextProvider = ({ children }: ProviderProps) => {
  const [page, setPage] = useState<AppPage>('MyCardList');

  const changePage = (type: AppPage) => {
    setPage(type);
  };

  const context = {
    changePage,
    page,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
