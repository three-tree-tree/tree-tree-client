import React, { Dispatch, useReducer, useState } from 'react';

import treeReducer from './dux/reducer';
import treeInitialState, { InitialState } from './dux/initialState';

export enum PageStatus {
  LANDING = 'landing-page',
  PROMISE = 'promise-page',
  SELECTING = 'selection-page',
  CREATING = 'creation-page',
  DELIVERYING = 'delivery-page',
}

export interface GlobalContext {
  pageState: PageStatus,
  setPage: (type: PageStatus) => void;
  treeStore: InitialState;
  treeDispatcher: Dispatch<{ type: string, payload: any }>;
}
export interface GlobalContextProviderProps {
  children: React.ReactElement;
}

const GlobalContext = React.createContext<GlobalContext | null>(null);

export const useGlobalContext = () => React.useContext(GlobalContext);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps): React.ReactElement => {
  const [pageState, setPageState] = useState<PageStatus>(PageStatus.LANDING);
  const [treeStore, treeDispatcher] = useReducer(treeReducer, treeInitialState);

  return (
    <GlobalContext.Provider value={{
      pageState,
      setPage: (type: PageStatus) => setPageState(type),
      treeStore,
      treeDispatcher,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
