import React from 'react';
import './App.css';
import { CreationPage } from './components/CreationPage';
import { DeliveryPage } from './components/DeliveryPage';
import { LandingPage } from './components/LandingPage';
import { LoadingPage } from './components/LoadingPage';
import { SelectionPage } from './components/SelectionPage';
import { PageStatus, useGlobalContext } from './lib/GlobalContext';

function App(): React.ReactElement {
  const { pageState } = useGlobalContext();

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
