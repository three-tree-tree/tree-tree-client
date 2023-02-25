import React, { useState, useEffect } from 'react';
import { GlobalContext, PageStatus, useGlobalContext } from '../../lib/GlobalContext';
import { Button, ButtonTypes } from '../Button';
import { Icon, IconTypes } from '../Icon';
import axios from 'axios';

import MainContent from './app_main.svg';
import TextContent from './text-content.svg';

import './index.css';

const SERVER_HOST = "http://localhost:8080"
const INSTAGRAM_FEED_URL = "https://www.instagram.com/explore/tags/%EC%A7%80%EA%B5%AC%EB%B0%A9%EC%9C%84%EB%8C%80_%EC%A7%80%EA%B5%AC%EB%A5%BC%EC%A7%80%EC%BC%9C%EB%9D%BC/"

interface LandingPageProps {
  className?: string;
}

export const LandingPage = ({
  className,
}: LandingPageProps): React.ReactElement => {
  const { setPage } = useGlobalContext() as GlobalContext;
  const [peopleCount, setPeopleCount] = useState(1000);

  useEffect(() => {
    axios
      .get(SERVER_HOST + "/people/count")
      .then((res) => {
        if (res.data.count > 0) {
          setPeopleCount(res.data.count);
        }
      })
  })

  const handleOnClickFeedButton = () => {
    window.location.replace(INSTAGRAM_FEED_URL); 
  }

  return (
    <div className={`${className} tree-landing-page`}>
      <div style={{ visibility: peopleCount ? "visible" : "hidden" }}>
        <Icon
          className='tree-landing-page__title-logo'
          type={IconTypes.CURRENT_COUNT}
        />
        <div>
          <div className='tree-landing-page__people-count'>  1000명 </div>
        </div>
      </div>
      <img
        className='tree-landing-page__main-content'
        src={MainContent}
      />
      <Button
        className='tree-landing-page__start-button'
        onClick={() => {
          setPage(PageStatus.SELECTING)
        }}
        type={ButtonTypes.START_JOIN}
      />

      <Button
        className='tree-landing-page__feed-button'
        onClick={handleOnClickFeedButton}
        type={ButtonTypes.INSTAGRAM_FEED}
      />

      <img
        className='tree-landing-page__text-content'
        src={TextContent}
      />
    </div>
  );
};
