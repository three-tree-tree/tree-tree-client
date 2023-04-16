import React, { useState } from 'react';
import './index.css';
import '../common.css'
import html2canvas from 'html2canvas';

import { CHANGE_COLOR, SAVE_IMAGE, SELECT_ITEM } from '../../lib/dux/actionTypes';
import { GlobalContext, PageStatus, useGlobalContext } from '../../lib/GlobalContext';
import { ColorIcon, ColorTypes } from '../Colors';
import { Icon, IconTypes } from '../Icon';
import { ImageRenderer } from '../ImageRenderer';
import { StylesBox } from './stylesBox';

import TopTitleLogo from '../Icon/logo.svg'
import BackButton from '../Icon/left-arrow.svg'
import Sparkle from '../../svgs/sparkle.svg';
import CheckButton from '../Icon/check-button.svg'

interface CreationPageProps {
  className?: string;
}

export const CreatingBoxStatus = {
  HAIR: 'hair',
  SHIRTS: 'shirts',
  PANTS: 'pants',
  SHOES: 'shoes',
} as const;
export type CreatingBoxStatus = typeof CreatingBoxStatus[keyof typeof CreatingBoxStatus];

export const CreationPage = ({
  className,
}: CreationPageProps): React.ReactElement => {
  const {
    setPage,
    treeDispatcher,
    treeStore,
  } = useGlobalContext() as GlobalContext;
  const { hairColor } = treeStore;

  const [boxState, setBoxState] = useState<CreatingBoxStatus>(CreatingBoxStatus.HAIR);
  const [itemColor, setItemColor] = useState<ColorTypes>(hairColor);

  return (
    <div className={`${className} container`}>
      {/* <div className='tree-creation-page__header'>
        <Icon
          className='tree-creation-page__header__back-button'
          type={IconTypes.LEFT_ARROW}
          onClick={() => {
            setPage(PageStatus.SELECTING)
          }}
        />
        <Icon
          className='tree-creation-page__header__title-logo'
          type={IconTypes.LOGO}
        />
        <Icon
          className='tree-creation-page__header__confirm-button'
          type={IconTypes.CHECK_BUTTON}
          onClick={() => {
            html2canvas(document.getElementById('image-capture-area') as HTMLElement, {})
              .then(canvas => {
                treeDispatcher({
                  type: SAVE_IMAGE,
                  payload: canvas.toDataURL('image/png'),
                })
                setPage(PageStatus.DELIVERYING)
              })
          }}
        />
      </div> */}

      <div className='top-title'>
        <div className='back-button' onClick={() => {setPage(PageStatus.SELECTING)}}>
          <BackButton />
        </div>
        <div className='top-title-logo'>
          <TopTitleLogo />
        </div>
        <div className='top-title-right'>
          <div className='top-title-check-button'
            onClick={() => {
              html2canvas(document.getElementById('image-capture-area') as HTMLElement, {})
                .then(canvas => {
                  treeDispatcher({
                    type: SAVE_IMAGE,
                    payload: canvas.toDataURL('image/png'),
                  })
                  setPage(PageStatus.DELIVERYING)
                })
            }}
          >
            <CheckButton />
          </div>
        </div>
      </div>

      {/* <div>
        <Sparkle />
        STEP 02
        <Sparkle />
      </div>
      <div>
      그린가디언즈의 활동복을 골라주세요!
      </div> */}

      <div className='creation-page__content-wrap'>
        <div className='page__content-title'>
          <div className='page__content-title-sparkle'>
            <Sparkle />
          </div>
          <p>STEP 02</p>
          <div className='page__content-title-sparkle'>
            <Sparkle />
          </div>
        </div>
        <div className='creation-page__content'>
          <p>
            그린가디언즈의 활동복을 골라주세요!
          </p>
        </div>
      </div>

      <div className='tree-creation-page__creating-box'>
        <div id='image-capture-area'>
          <ImageRenderer />
        </div>
        <div className='creating-control-box'>
          <div className='creating-control-box__menu'>
            <Icon
              className='creating-control-box__menu__item'
              type={boxState === CreatingBoxStatus.HAIR ? IconTypes.HAIR_BLUE : IconTypes.HAIR}
              onClick={() => { setBoxState(CreatingBoxStatus.HAIR) }}
            />
            <Icon
              className='creating-control-box__menu__item'
              type={boxState === CreatingBoxStatus.SHIRTS ? IconTypes.SHIRTS_BLUE : IconTypes.SHIRTS}
              onClick={() => { setBoxState(CreatingBoxStatus.SHIRTS) }}
            />
            <Icon
              className='creating-control-box__menu__item'
              type={boxState === CreatingBoxStatus.PANTS ? IconTypes.PANTS_BLUE : IconTypes.PANTS}
              onClick={() => { setBoxState(CreatingBoxStatus.PANTS) }}
            />
            <Icon
              className='creating-control-box__menu__item'
              type={boxState === CreatingBoxStatus.SHOES ? IconTypes.SHOES_BLUE : IconTypes.SHOES}
              onClick={() => { setBoxState(CreatingBoxStatus.SHOES) }}
            />
          </div>
          <div className='creating-control-box__colors'>
            {Object.values(ColorTypes).map((color) => (
              <ColorIcon
                key={color}
                className='creating-control-box__colors__item'
                color={color}
                onClick={() => {
                  setItemColor(color);
                  treeDispatcher({
                    type: CHANGE_COLOR,
                    payload: { color, type: boxState },
                  });
                }}
              />
            ))}
          </div>
          <div className='creating-control-box__styles'>
            <StylesBox
              type={boxState}
              color={itemColor}
              onClick={(props) => {
                treeDispatcher({
                  type: SELECT_ITEM,
                  payload: props,
                })
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
