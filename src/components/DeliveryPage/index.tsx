import React from 'react';
import './index.css';

import MainContent from './step-3.svg';
import ImageBox from './image-box.svg';
import { Icon, IconTypes } from '../Icon';
import { PageStatus, useGlobalContext, GlobalContext } from '../../lib/GlobalContext';

import { InstagramButton } from './InstagramButton';
import { KakaoTalkButton } from './KakaoTalkButton';
import { SaveImageButton } from './SaveImageButton';

interface DeliveryPageProps {
  className?: string;
}

export const DeliveryPage = ({
  className,
}: DeliveryPageProps): React.ReactElement => {
  const tempImageBlob = new Blob(["Hello, world!"], {
    type: "text/plain;charset=utf-8"
  });
  const { setPage } = useGlobalContext() as GlobalContext;;

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
      <div>
        <InstagramButton className='tree-delivery-page__instagram-button' />
      </div>
      <div className='tree-delivery-page__button-wrapper'>
        <KakaoTalkButton className='tree-delivery-page__button-item' />
        <SaveImageButton className='tree-delivery-page__button-item' imageFile={tempImageBlob} />
      </div>
    </div>
  );
};
