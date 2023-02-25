import React, { useMemo } from 'react';
import { InterestingIssueType } from '../../lib/dux/initialState';
import { GlobalContext, useGlobalContext } from '../../lib/GlobalContext';
import { ImageSource } from './imageSource';
import './index.css';

import BackgroundImage from './background.svg';
import App_Cloak from './shirts/app/app_cape.svg';
import Bag_Cloak from './shirts/bag/bag_cape.svg';
import Cup_Cloak from './shirts/cup/cup_cape.svg';
import Paper_Cloak from './shirts/paper/paper_cape.svg';
import Plug_Cloak from './shirts/plug/plug_cape.svg';

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
    bottomClothes,
    bottomColor,
    shoesType,
    shoesColor
  } = treeStore;

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
  }, [interestingIssueType]);

  return (
    <div className='tree-image-renderer'>
      <div className='tree-iamge-source absolute-wrapper'>
        <BackgroundImage />
        {cloak}
      </div>
      <ImageSource type="shoes" number={shoesType} color={shoesColor} />
      <ImageSource type="pants" number={bottomClothes} color={bottomColor} />
      <ImageSource type="shirts" number={topClothes} interest={interestingIssueType as InterestingIssueType} />
      <ImageSource type="hair" number={hairStyle} color={hairColor} />
    </div>
  )
}
