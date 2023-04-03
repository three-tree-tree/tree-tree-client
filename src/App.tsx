import React from 'react';
import './App.css';
import { CreationPage } from './components/CreationPage';
import { DeliveryPage } from './components/DeliveryPage';
import { LandingPage } from './components/LandingPage';
import { LoadingPage } from './components/LoadingPage';
import { SelectionPage } from './components/SelectionPage';
import { GlobalContext, PageStatus, useGlobalContext } from './lib/GlobalContext';

function App(): React.ReactElement {
  const { pageState } = useGlobalContext() as GlobalContext;

  return (
    <>
    <head>
      <meta name="google-site-verification" content="5-hXYcAsBHy9Opbw4ZM6V81ibOm1aKcdlQjRZ_ydr1c" />
      <meta name="naver-site-verification" content="4fed00a7fec42fff4c905ccccfa8bb10afa5732e" />
    </head>
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
    </>
  );
}

export default App;
