import React, { useMemo } from 'react';
import { InterestingIssueType } from '../../lib/dux/initialState';
import { GlobalContext, useGlobalContext } from '../../lib/GlobalContext';
import { ImageSource } from './imageSource';
import './index.css';

import BackgroundImage from './background.png';
import App_Cloak from './shirts/app/app_cape.svg';
import Bag_Cloak from './shirts/bag/bag_cape.svg';
import Cup_Cloak from './shirts/cup/cup_cape.svg';
import Paper_Cloak from './shirts/paper/paper_cape.svg';
import Plug_Cloak from './shirts/plug/plug_cape.svg';

import Hair_6 from './hair/hair_06_down.svg';
import Hair_7 from './hair/hair_07_down.svg';
import Hair_8 from './hair/hair_08_down.svg';
import { prettyColor } from '../MenuIcon';

export interface ImageRendererProps {

}

export const ImageRenderer = ({

}: ImageRendererProps): React.ReactElement => {
  const { treeStore } = useGlobalContext() as GlobalContext;
  const {
    interestingIssueType,
    hairStyle,
    hairColor,
    topClothes,
    topColor,
    bottomClothes,
    bottomColor,
    shoesType,
    shoesColor
  } = treeStore;

  const longHair = useMemo(() => {
    switch (hairStyle) {
      case 4:
        return <div className={`tree-image-source ${prettyColor(hairColor)}`}><Hair_6 /></div>
      case 6:
        return <div className={`tree-image-source ${prettyColor(hairColor)}`}><Hair_7 /></div>
      case 7:
        return <div className={`tree-image-source ${prettyColor(hairColor)}`}><Hair_8 /></div>
      default: return '';
    }
  }, [hairStyle, hairColor]);
  const cloak = useMemo(() => {
    if (interestingIssueType === InterestingIssueType.USING_ELEC_RECEIPT) {
      return <App_Cloak />
    }
    if (interestingIssueType === InterestingIssueType.USING_BASKET) {
      return <Bag_Cloak />
    }
    if (interestingIssueType === InterestingIssueType.REDUCING_TRASH) {
      return <Cup_Cloak />
    }
    if (interestingIssueType === InterestingIssueType.SAVING_PAPER) {
      return <Paper_Cloak />
    }
    if (interestingIssueType === InterestingIssueType.SAVING_ENERGY) {
      return <Plug_Cloak />
    }
    return ''
  }, [interestingIssueType]);

  return (
    <div className='tree-image-renderer'>
      <div className='tree-iamge-source absolute-wrapper'>
        <img className='tree-image-source__background' src={BackgroundImage} />
        {longHair}
        {cloak}
      </div>
      <ImageSource type="shoes" number={shoesType} color={shoesColor} />
      <ImageSource type="pants" number={bottomClothes} color={bottomColor} />
      <ImageSource type="shirts" number={topClothes} color={topColor} interest={interestingIssueType as InterestingIssueType} />
      <ImageSource type="hair" number={hairStyle} color={hairColor} />
    </div>
  )
}
