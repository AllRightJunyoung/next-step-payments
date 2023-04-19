import { AppContext } from '../context/App';
import { useState, useContext } from 'react';
import type { AppPage } from '../context/App';

const usePage = () => {
  const appCtx = useContext(AppContext);
  const page = appCtx.page;

  const setPage = (type: AppPage) => {
    appCtx.changePage(type);
  };

  return { page, setPage };
};
export default usePage;
