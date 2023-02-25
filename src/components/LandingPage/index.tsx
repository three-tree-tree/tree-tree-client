import React, { useState, useEffect } from 'react';
import { GlobalContext, PageStatus, useGlobalContext } from '../../lib/GlobalContext';
import { Button, ButtonTypes } from '../Button';
import { Icon, IconTypes } from '../Icon';
import axios from 'axios';

import MainContent from './app_main.svg';
import TextContent from './text-content.svg';

import './index.css';

const SERVER_HOST = "http://localhost:8080"

interface LandingPageProps {
  className?: string;
}

export const LandingPage = ({
  className,
}: LandingPageProps): React.ReactElement => {
  const { setPage } = useGlobalContext() as GlobalContext;
  const [peopleCount, setPeopleCount] = useState(undefined);

  useEffect(() => {
    axios
      .get(SERVER_HOST + "/people/count")
      .then((res) => {
        if (res.data.count > 0) {
          setPeopleCount(res.data.count);
        }
      })
  })

  return (
    <div className={`${className} tree-landing-page`}>
      <Icon
        className='tree-landing-page__title-logo'
        type={IconTypes.CURRENT_COUNT}
      />
      {
        peopleCount &&
        <div>
          <div style={{ color: 'red' }}> {peopleCount} 명 </div>
        </div>
      }
      <div className='tree-landing-page__main-content'>
        <MainContent />
      </div>
      <Button
        className='tree-landing-page__start-button'
        onClick={() => {
          setPage(PageStatus.SELECTING)
        }}
        type={ButtonTypes.START_JOIN}
      />
      <div className='tree-landing-page__text-content'>
        <TextContent />
      </div>
    </div>
  );
};
