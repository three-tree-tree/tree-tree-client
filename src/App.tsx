import React, { useState } from 'react';
import './App.css';
import { CreationPage } from './components/CreationPage';
import { DeliveryPage } from './components/DeliveryPage';
import { LandingPage } from './components/LandingPage';
import { LoadingPage } from './components/LoadingPage';
import { SelectionPage } from './components/SelectionPage';

export enum PageStatus {
  LOADING = 'loading-page',
  LANDING = 'landing-page',
  SELECTING = 'selection-page',
  CREATING = 'creation-page',
  DELIVERYING = 'delivery-page',
}

function App(): React.ReactElement {
  const [pageState, setPageState] = useState<PageStatus>(PageStatus.LOADING);

  
  return (
    <div className="App">
      {pageState === PageStatus.LOADING && (
        <LoadingPage
          className="tree-app-page"
        />
      )}
      {pageState === PageStatus.LANDING && (
        <LandingPage
          className="tree-app-page"
        />
      )}
      {pageState === PageStatus.SELECTING && (
        <SelectionPage
          className="tree-app-page"
        />
      )}
      {pageState === PageStatus.CREATING && (
        <CreationPage
          className="tree-app-page"
        />
      )}
      {pageState === PageStatus.DELIVERYING && (
        <DeliveryPage
          className="tree-app-page"
        />
      )}
    </div>
  );
}

export default App;
