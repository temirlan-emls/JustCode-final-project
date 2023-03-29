import { useEffect } from 'react';

export const useSetPageTitle = (pageName, defaultPageName) => {
  useEffect(() => {
    document.title = pageName || defaultPageName;
  }, [pageName, defaultPageName]);
};
