import React, { useRef, useState } from 'react';
// import mergeImages from 'merge-images';
import './index.css';

import { CHANGE_COLOR, SELECT_ITEM } from '../../lib/dux/actionTypes';
import { GlobalContext, PageStatus, useGlobalContext } from '../../lib/GlobalContext';
import { ColorIcon, ColorTypes } from '../Colors';
import { Icon, IconTypes } from '../Icon';
import { ImageRenderer } from '../ImageRenderer';
import { StylesBox } from './stylesBox';

// import Hair from '../ImageRenderer/hair/hair_00_down.svg';
// import { Trigger, Wrapper } from '../../lib/utils.jsx';

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
  } = useGlobalContext() as GlobalContext;
  const [boxState, setBoxState] = useState<CreatingBoxStatus>(CreatingBoxStatus.HAIR);
  const [itemColor, setItemColor] = useState<ColorTypes>(ColorTypes.MINT);

  const canvasRef = useRef(null);

  return (
    <div className={`${className} tree-creation-page`}>
      <div className='tree-creation-page__header'>
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
        {/* <Trigger> */}
        <Icon
          type={IconTypes.LEFT_ARROW}
        // onClick={() => {
        //   // disable-ts
        //   var list = document.querySelectorAll("[class *= tree-image-resource]")
        //   const arr: Array<string> = [];
        //   list.forEach((dom: Element) => {
        //     const s = new XMLSerializer().serializeToString(dom)
        //     var l ='data:image/svg;base64,' + window.btoa(s);
        //     fetch(l);
        //     const img = new Image()
        //     img.onload = () => {
        //       console.log(img)
        //     }
        //     img.src = l;
        //     // var u = URL.createObjectURL(l);
        //     arr.push(l);
        //     // return u;
        //   })
        //   // const ca = (canvasRef?.current) as HTMLCanvasElement | null;
        //   // const h = Hair;
        //   // img.src = `data:image/svg+xml;base64,${}`
        //   // ca?.getContext?.('2d').drawImage(URL.createObjectURL(new Blob([Hair], {type: 'image/svg+xml'})))
        //   mergeImages(arr).then((mergedImg) => {
        //     const blob = new Blob([mergedImg], { type: 'image/svg+xml' })
        //     console.log(blob);
        //     debugger
        //   })
        // }}
        />
        {/* </Trigger> */}
      </div>
      <Icon
        className='tree-creation-page__step-description'
        type={IconTypes.STEP_2}
      />
      <div
        className='tree-creation-page__creating-box'
      >
        {/* <Wrapper> */}
        <ImageRenderer />
        {/* </Wrapper> */}
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
