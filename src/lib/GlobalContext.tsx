import React, { useState } from 'react';

export enum PageStatus {
  LOADING = 'loading-page',
  LANDING = 'landing-page',
  SELECTING = 'selection-page',
  CREATING = 'creation-page',
  DELIVERYING = 'delivery-page',
}

export interface GlobalContext {
  pageState: PageStatus,
  setPage: (type: PageStatus) => void;
}
export interface GlobalContextProviderProps {
  children: React.ReactElement;
}

const GlobalContext = React.createContext({
  pageState: PageStatus.LANDING,
  setPage: (_: PageStatus) => {},
});

export const useGlobalContext = () => React.useContext(GlobalContext);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps): React.ReactElement => {
  const [pageState, setPageState] = useState<PageStatus>(PageStatus.LANDING);
  return (
    <GlobalContext.Provider value={{
      pageState,
      setPage: (type: PageStatus) => setPageState(type),
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
