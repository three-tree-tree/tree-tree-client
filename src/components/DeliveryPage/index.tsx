import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import './index.css';

import { Icon, IconTypes } from '../Icon';
import { Button, ButtonTypes } from '../Button';
import { PageStatus, useGlobalContext, GlobalContext } from '../../lib/GlobalContext';

import { CompleteButton } from './CompleteButton';
import { CompletePopup } from './CompletePopup';
import MainContent from './step-3.svg';
import ImageGuide from './image-guide.svg'
import TagTexts from './tag-texts.svg';
import { SharePopup } from './SharePopup';

const INSTAGRAM_FEED_URL = "https://www.instagram.com/explore/tags/%EC%A7%80%EA%B5%AC%EB%B0%A9%EC%9C%84%EB%8C%80_%EC%A7%80%EA%B5%AC%EB%A5%BC%EC%A7%80%EC%BC%9C%EB%9D%BC/"
const SERVICE_HOST = "https://three-tree-tree.github.io/"

interface DeliveryPageProps {
  className?: string;
}

export const DeliveryPage = ({
  className,
}: DeliveryPageProps): React.ReactElement => {
  const { setPage, treeStore } = useGlobalContext() as GlobalContext;
  const { imageSource } = treeStore;

  const [openPopUp, setOpenPopUp] = useState(false);
  const [openSharePopUp, setOpenSharePopUp] = useState(false);

  const handlePopUp = (open: boolean) => {
    setOpenPopUp(open);
  }

  const handleSharePopUp = () => {
    setOpenSharePopUp(true);
    setTimeout(() => {
      setOpenSharePopUp(false);
    }, 1500);
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
        {imageSource && (
          <img className='tree-delivery-page__custom-image' src={imageSource} />
        )}
        <div className='tree-delivery-page__tag-texts'>
          <TagTexts />
        </div>
      </div>
      <div className='tree-delivery-page__image-guide'>
        <ImageGuide />
      </div>
      <CompleteButton className='tree-delivery-page__instagram-button' popupFun={handlePopUp}/>
      <div className='tree-delivery-page__button-wrapper'>
        <Button
          className='tree-delivery-page__retry'
          onClick={() => {setPage(PageStatus.LANDING)}}
          type={ButtonTypes.RETRY}
        />
      <CopyToClipboard text={SERVICE_HOST} onCopy={handleSharePopUp}>
        <Button
          className='tree-delivery-page__copy'
          onClick={() => {}}
          type={ButtonTypes.COPY_LINK}
          />
        </CopyToClipboard>
      </div>
      { openPopUp && <CompletePopup className="tree-delivery-page__popup-modal" />}
      { openSharePopUp && <SharePopup />}
    </div>
  );
};
