import React from 'react';
import './index.css';

import { Icon, IconTypes } from '../Icon';
import { Button, ButtonTypes } from '../Button';
import { PageStatus, useGlobalContext, GlobalContext } from '../../lib/GlobalContext';

import { CompleteButton } from './CompleteButton';
import MainContent from './step-3.svg';
import ImageBox from './image-box.svg';

const INSTAGRAM_FEED_URL = "https://www.instagram.com/explore/tags/%EC%A7%80%EA%B5%AC%EB%B0%A9%EC%9C%84%EB%8C%80_%EC%A7%80%EA%B5%AC%EB%A5%BC%EC%A7%80%EC%BC%9C%EB%9D%BC/"

interface DeliveryPageProps {
  className?: string;
}

export const DeliveryPage = ({
  className,
}: DeliveryPageProps): React.ReactElement => {
  const { setPage } = useGlobalContext() as GlobalContext;

  const handleOnClickFeedButton = () => {
    window.location.replace(INSTAGRAM_FEED_URL); 
  }

  return (
    <div className={`${className} tree-delivery-page`}>
      <div className='tree-delivery-page__header'>
        <Icon
          className='tree-delivery-page__header__back-button'
          type={IconTypes.LEFT_ARROW}
          onClick={() => {
            setPage(PageStatus.CREATING)
          }}
        />
        <Icon
          className='tree-delivery-page__header__title-logo'
          type={IconTypes.LOGO}
        />
      </div>
      <img
        className='tree-delivery-page__main-content'
        src={MainContent}
      />
      <div>
        <img
          className='tree-delivery-page__image-box'
          src={ImageBox}
        />
      </div>
      <CompleteButton className='tree-delivery-page__instagram-button' />
      <Button
        className='tree-delivery-page__feed-button'
        onClick={handleOnClickFeedButton}
        type={ButtonTypes.INSTAGRAM_FEED}
      />
    </div>
  );
};
