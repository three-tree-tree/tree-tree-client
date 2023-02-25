import React, { useMemo } from 'react';
import './index.css';

import Logo from './logo.svg'; // 지구방위대
import LeftArrow from './left-arrow.svg';
import CurrentMemberCount from './current-member-count.svg'; // 현재까지 참여한 지구 방위대
import Step1 from './step_01.svg';
import Step2 from './step_02.svg';

import HairIcon from './hair.svg';
import HairBlueIcon from './hair-blue.svg';
import ShirtsIcon from './shirts.svg';
import ShirtsBlueIcon from './shirts-blue.svg';
import PantsIcon from './pants.svg';
import PnatsBlueIcon from './pants-blue.svg';
import ShoesIcon from './shoes.svg';
import ShoesBlueIcon from './shoes-blue.svg';

export const IconTypes = {
  CURRENT_COUNT: 'CURRENT_COUNT',
  LOGO: 'LOGO',
  LEFT_ARROW: 'LEFT_ARROW',
  STEP_1: 'STEP_1',
  STEP_2: 'STEP_2',
  HAIR: 'HAIR',
  HAIR_BLUE: 'HAIR_BLUE',
  SHIRTS: 'SHIRTS',
  SHIRTS_BLUE: 'SHIRTS_BLUE',
  PANTS: 'PANTS',
  PANTS_BLUE: 'PANTS_BLUE',
  SHOES: 'SHOES',
  SHOES_BLUE: 'SHOES_BLUE',
} as const;
export type IconTypes = typeof IconTypes[keyof typeof IconTypes];

export interface IconProps {
  className?: string;
  type: IconTypes;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Icon = ({
  className = '',
  type,
  onClick,
}: IconProps): React.ReactElement => {
  const iconBody = useMemo(() => {
    switch (type) {
      case IconTypes.LOGO: {
        return <div className='tree-icon logo'><Logo /></div>
      }
      case IconTypes.CURRENT_COUNT: {
        return <div className='tree-icon current-member-count'><CurrentMemberCount /></div>
      }
      case IconTypes.LEFT_ARROW: {
        return <div className='tree-icon left-arrow' ><LeftArrow /></div>
      }
      case IconTypes.STEP_1: {
        return <div className='tree-icon'><Step1 /></div>
      }
      case IconTypes.STEP_2: {
        return <div className='tree-icon'><Step2 /></div>
      }
      case IconTypes.HAIR: {
        return <div className='tree-icon creating-box-icon' ><HairIcon /></div>
      }
      case IconTypes.HAIR_BLUE: {
        return <div className='tree-icon creating-box-icon' ><HairBlueIcon /></div>
      }
      case IconTypes.SHIRTS: {
        return <div className='tree-icon creating-box-icon' ><ShirtsIcon /></div>
      }
      case IconTypes.SHIRTS_BLUE: {
        return <div className='tree-icon creating-box-icon' ><ShirtsBlueIcon /></div>
      }
      case IconTypes.PANTS: {
        return <div className='tree-icon creating-box-icon' ><PantsIcon /></div>
      }
      case IconTypes.PANTS_BLUE: {
        return <div className='tree-icon creating-box-icon' ><PnatsBlueIcon /></div>
      }
      case IconTypes.SHOES: {
        return <div className='tree-icon creating-box-icon' ><ShoesIcon /></div>
      }
      case IconTypes.SHOES_BLUE: {
        return <div className='tree-icon creating-box-icon' ><ShoesBlueIcon /></div>
      }
      default:
        return <span style={{ fontSize: 34 }}>'지구방위대'</span>
    }
  }, [type]);

  return (
    <div
      className={`${className} tree-icon`}
      onClick={onClick}
    >
      {iconBody}
    </div>
  );
};
