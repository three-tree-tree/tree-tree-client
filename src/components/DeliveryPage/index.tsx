import React, { useState } from 'react';
import './index.css';

import { Icon, IconTypes } from '../Icon';
import { Button, ButtonTypes } from '../Button';
import { PageStatus, useGlobalContext, GlobalContext } from '../../lib/GlobalContext';

import { CompleteButton } from './CompleteButton';
import { CompletePopup } from './CompletePopup';
import MainContent from './step-3.svg';
import ImageBox from './image-box.svg';
import ImageGuide from './image-guide.svg'

const INSTAGRAM_FEED_URL = "https://www.instagram.com/explore/tags/%EC%A7%80%EA%B5%AC%EB%B0%A9%EC%9C%84%EB%8C%80_%EC%A7%80%EA%B5%AC%EB%A5%BC%EC%A7%80%EC%BC%9C%EB%9D%BC/"

interface DeliveryPageProps {
  className?: string;
}

export const DeliveryPage = ({
  className,
}: DeliveryPageProps): React.ReactElement => {
  const { setPage, treeStore } = useGlobalContext() as GlobalContext;
  const { imageSource } = treeStore;

  const [ openPopUp, setOpenPopUp ] = useState(false);

  const handleOnClickFeedButton = () => {
    window.location.href = INSTAGRAM_FEED_URL;
  }

  const handlePopUp = (open: boolean) => {
    setOpenPopUp(open);
  }

  return (
    <div className={`${className} tree-delivery-page`}>
      <div className='tree-selection-page__header'>
  
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
      <div className='tree-delivery-page__main-content'>
        <MainContent />
      </div>
      <div className='tree-delivery-page__image-box'>
        <ImageBox />
        {
          imageSource && (
            <img className='tree-delivery-page__custom-image' src={imageSource} />
          )
        }
      </div>
      <div className='tree-delivery-page__image-guide'>
        <ImageGuide />
      </div>
      <CompleteButton className='tree-delivery-page__instagram-button' popupFun={handlePopUp}/>
      <Button
        className='tree-delivery-page__feed-button'
        onClick={handleOnClickFeedButton}
        type={ButtonTypes.INSTAGRAM_FEED}
      />
      { openPopUp && <CompletePopup className="tree-delivery-page__popup-modal" />}
    </div>
  );
};
