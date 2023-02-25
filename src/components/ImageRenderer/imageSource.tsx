import React, { useMemo } from 'react';
import { ColorTypes } from '../Colors';
import { CreatingBoxStatus } from '../CreationPage';
import { prettyColor } from '../MenuIcon';
import { InterestingIssueType } from '../../lib/dux/initialState';

import Hair_1_D from './hair/hair_00_down.svg';
import Hair_2_D from './hair/hair_01_down.svg';
import Hair_3_D from './hair/hair_02_down.svg';
import Hair_4_D from './hair/hair_03_down.svg';
import Hair_5_D from './hair/hair_04_down.svg';
import Hair_6_D from './hair/hair_05_down.svg';
import Hair_7_D from './hair/hair_06_down.svg';
import Hair_8_D from './hair/hair_07_down.svg';
import Hair_1_U from './hair/hair_00_up.svg';
import Hair_2_U from './hair/hair_01_up.svg';
import Hair_3_U from './hair/hair_02_up.svg';
import Hair_4_U from './hair/hair_03_up.svg';
import Hair_5_U from './hair/hair_04_up.svg';
import Hair_6_U from './hair/hair_05_up.svg';
import Hair_7_U from './hair/hair_06_up.svg';
import Hair_8_U from './hair/hair_07_up.svg';

import App_Shirts_1 from './shirts/app/app_top_01.svg';
import App_Shirts_2 from './shirts/app/app_top_02.svg';
import App_Shirts_3 from './shirts/app/app_top_03.svg';
import App_Shirts_4 from './shirts/app/app_top_04.svg';
import App_Shirts_5 from './shirts/app/app_top_05.svg';
import App_Shirts_6 from './shirts/app/app_top_06.svg';
import App_Shirts_7 from './shirts/app/app_top_07.svg';
import App_Shirts_8 from './shirts/app/app_top_08.svg';
import Bag_Shirts_1 from './shirts/bag/bag_top_01.svg';
import Bag_Shirts_2 from './shirts/bag/bag_top_02.svg';
import Bag_Shirts_3 from './shirts/bag/bag_top_03.svg';
import Bag_Shirts_4 from './shirts/bag/bag_top_04.svg';
import Bag_Shirts_5 from './shirts/bag/bag_top_05.svg';
import Bag_Shirts_6 from './shirts/bag/bag_top_06.svg';
import Bag_Shirts_7 from './shirts/bag/bag_top_07.svg';
import Bag_Shirts_8 from './shirts/bag/bag_top_08.svg';
import Cup_Shirts_1 from './shirts/cup/cup_top_01.svg';
import Cup_Shirts_2 from './shirts/cup/cup_top_02.svg';
import Cup_Shirts_3 from './shirts/cup/cup_top_03.svg';
import Cup_Shirts_4 from './shirts/cup/cup_top_04.svg';
import Cup_Shirts_5 from './shirts/cup/cup_top_05.svg';
import Cup_Shirts_6 from './shirts/cup/cup_top_06.svg';
import Cup_Shirts_7 from './shirts/cup/cup_top_07.svg';
import Cup_Shirts_8 from './shirts/cup/cup_top_08.svg';
import Paper_Shirts_1 from './shirts/paper/paper_top_01.svg';
import Paper_Shirts_2 from './shirts/paper/paper_top_02.svg';
import Paper_Shirts_3 from './shirts/paper/paper_top_03.svg';
import Paper_Shirts_4 from './shirts/paper/paper_top_04.svg';
import Paper_Shirts_5 from './shirts/paper/paper_top_05.svg';
import Paper_Shirts_6 from './shirts/paper/paper_top_06.svg';
import Paper_Shirts_7 from './shirts/paper/paper_top_07.svg';
import Paper_Shirts_8 from './shirts/paper/paper_top_08.svg';
import Plug_Shirts_1 from './shirts/plug/plug_top_01.svg';
import Plug_Shirts_2 from './shirts/plug/plug_top_02.svg';
import Plug_Shirts_3 from './shirts/plug/plug_top_03.svg';
import Plug_Shirts_4 from './shirts/plug/plug_top_04.svg';
import Plug_Shirts_5 from './shirts/plug/plug_top_05.svg';
import Plug_Shirts_6 from './shirts/plug/plug_top_06.svg';
import Plug_Shirts_7 from './shirts/plug/plug_top_07.svg';
import Plug_Shirts_8 from './shirts/plug/plug_top_08.svg';

import Pants_1 from './pants/bottom_01.svg';
import Pants_2 from './pants/bottom_02.svg';
import Pants_3 from './pants/bottom_03.svg';
import Pants_4 from './pants/bottom_04.svg';
import Pants_5 from './pants/bottom_05.svg';
import Pants_6 from './pants/bottom_06.svg';
import Pants_7 from './pants/bottom_07.svg';
import Pants_8 from './pants/bottom_08.svg';

import Legs from './legs.svg';

import Shoes_1 from './shoes/shose_01.svg';
import Shoes_2 from './shoes/shose_02.svg';
import Shoes_3 from './shoes/shose_03.svg';
import Shoes_4 from './shoes/shose_04.svg';
import Shoes_5 from './shoes/shose_05.svg';
import Shoes_6 from './shoes/shose_06.svg';
import Shoes_7 from './shoes/shose_07.svg';
import Shoes_8 from './shoes/shose_08.svg';

const shirtsApp = [
  <div className='absolute-wrapper'><App_Shirts_1 /></div>,
  <div className='absolute-wrapper'><App_Shirts_2 /></div>,
  <div className='absolute-wrapper'><App_Shirts_3 /></div>,
  <div className='absolute-wrapper'><App_Shirts_4 /></div>,
  <div className='absolute-wrapper'><App_Shirts_5 /></div>,
  <div className='absolute-wrapper'><App_Shirts_6 /></div>,
  <div className='absolute-wrapper'><App_Shirts_7 /></div>,
  <div className='absolute-wrapper'><App_Shirts_8 /></div>,
]
const shirtsBag = [
  <div className='absolute-wrapper'><Bag_Shirts_1 /></div>,
  <div className='absolute-wrapper'><Bag_Shirts_2 /></div>,
  <div className='absolute-wrapper'><Bag_Shirts_3 /></div>,
  <div className='absolute-wrapper'><Bag_Shirts_4 /></div>,
  <div className='absolute-wrapper'><Bag_Shirts_5 /></div>,
  <div className='absolute-wrapper'><Bag_Shirts_6 /></div>,
  <div className='absolute-wrapper'><Bag_Shirts_7 /></div>,
  <div className='absolute-wrapper'><Bag_Shirts_8 /></div>,
]
const shirtsCup = [
  <div className='absolute-wrapper'><Cup_Shirts_1 /></div>,
  <div className='absolute-wrapper'><Cup_Shirts_2 /></div>,
  <div className='absolute-wrapper'><Cup_Shirts_3 /></div>,
  <div className='absolute-wrapper'><Cup_Shirts_4 /></div>,
  <div className='absolute-wrapper'><Cup_Shirts_5 /></div>,
  <div className='absolute-wrapper'><Cup_Shirts_6 /></div>,
  <div className='absolute-wrapper'><Cup_Shirts_7 /></div>,
  <div className='absolute-wrapper'><Cup_Shirts_8 /></div>,
]
const shirtsPaper = [
  <div className='absolute-wrapper'><Paper_Shirts_1 /></div>,
  <div className='absolute-wrapper'><Paper_Shirts_2 /></div>,
  <div className='absolute-wrapper'><Paper_Shirts_3 /></div>,
  <div className='absolute-wrapper'><Paper_Shirts_4 /></div>,
  <div className='absolute-wrapper'><Paper_Shirts_5 /></div>,
  <div className='absolute-wrapper'><Paper_Shirts_6 /></div>,
  <div className='absolute-wrapper'><Paper_Shirts_7 /></div>,
  <div className='absolute-wrapper'><Paper_Shirts_8 /></div>,
]
const shirtsPlug = [
  <div className='absolute-wrapper'><Plug_Shirts_1 /></div>,
  <div className='absolute-wrapper'><Plug_Shirts_2 /></div>,
  <div className='absolute-wrapper'><Plug_Shirts_3 /></div>,
  <div className='absolute-wrapper'><Plug_Shirts_4 /></div>,
  <div className='absolute-wrapper'><Plug_Shirts_5 /></div>,
  <div className='absolute-wrapper'><Plug_Shirts_6 /></div>,
  <div className='absolute-wrapper'><Plug_Shirts_7 /></div>,
  <div className='absolute-wrapper'><Plug_Shirts_8 /></div>,
]

const imageSources = {
  hair: [
    <div className='absolute-wrapper'>
      <Hair_1_D />
      <Hair_1_U />
    </div>,
    <div className='absolute-wrapper'>
      <Hair_2_D />
      <Hair_2_U />
    </div>,
    <div className='absolute-wrapper'>
      <Hair_3_D />
      <Hair_3_U />
    </div>,
    <div className='absolute-wrapper'>
      <Hair_4_D />
      <Hair_4_U />
    </div>,
    <div className='absolute-wrapper'>
      <Hair_5_D />
      <Hair_5_U />
    </div>,
    <div className='absolute-wrapper'>
      <Hair_6_D />
      <Hair_6_U />
    </div>,
    <div className='absolute-wrapper'>
      <Hair_7_D />
      <Hair_7_U />
    </div>,
    <div className='absolute-wrapper'>
      <Hair_8_D />
      <Hair_8_U />
    </div>,
  ],
  shirts: shirtsApp,
  pants: [
    <Pants_1 />,
    <Pants_2 />,
    <Pants_3 />,
    <Pants_4 />,
    <Pants_5 />,
    <Pants_6 />,
    <Pants_7 />,
    <Pants_8 />,
  ],
  shoes: [
    <div className='absolute-wrapper'><Legs /><Shoes_1 />,</div>,
    <div className='absolute-wrapper'><Legs /><Shoes_2 />,</div>,
    <div className='absolute-wrapper'><Legs /><Shoes_3 />,</div>,
    <div className='absolute-wrapper'><Legs /><Shoes_4 />,</div>,
    <div className='absolute-wrapper'><Legs /><Shoes_5 />,</div>,
    <div className='absolute-wrapper'><Legs /><Shoes_6 />,</div>,
    <div className='absolute-wrapper'><Legs /><Shoes_7 />,</div>,
    <div className='absolute-wrapper'><Legs /><Shoes_8 />,</div>,
  ],
}

export interface ImageSourceProps {
  className?: string;
  type: CreatingBoxStatus;
  number: number;
  color?: ColorTypes;
  interest?: InterestingIssueType;
}

export const ImageSource = ({
  className,
  type,
  number,
  color = '',
  interest,
}: ImageSourceProps): React.ReactElement => {
  const resources = useMemo(() => {
    const resourcesObj = { ...imageSources };
    if (interest === InterestingIssueType.USING_ELEC_RECEIPT) {
      resourcesObj.shirts = shirtsApp;
    }
    if (interest === InterestingIssueType.USING_BASKET) {
      resourcesObj.shirts = shirtsBag;
    }
    if (interest === InterestingIssueType.REDUCING_TRASH) {
      resourcesObj.shirts = shirtsCup;
    }
    if (interest === InterestingIssueType.SAVING_PAPER) {
      resourcesObj.shirts = shirtsPaper;
    }
    if (interest === InterestingIssueType.SAVING_ENERGY) {
      resourcesObj.shirts = shirtsPlug;
    }
    return resourcesObj;
  }, [interest]);

  return (
    <div className={`tree-image-source ${prettyColor(color)} ${className}`}>
      {resources?.[type]?.[number]}
    </div>
  )
}
