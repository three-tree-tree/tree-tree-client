import React from 'react';

import './index.css';

import { ColorTypes } from '../Colors';
import { CreatingBoxStatus } from '../CreationPage';

import Hair_1 from './hair/hair_1.svg';
import Hair_2 from './hair/hair_2.svg';
import Hair_3 from './hair/hair_3.svg';
import Hair_4 from './hair/hair_4.svg';
import Hair_5 from './hair/hair_5.svg';
import Hair_6 from './hair/hair_6.svg';
import Hair_7 from './hair/hair_7.svg';
import Hair_8 from './hair/hair_8.svg';

import Shirts_1 from './shirts/top_icon_01.svg';
import Shirts_2 from './shirts/top_icon_02.svg';
import Shirts_3 from './shirts/top_icon_03.svg';
import Shirts_4 from './shirts/top_icon_04.svg';
import Shirts_5 from './shirts/top_icon_05.svg';
import Shirts_6 from './shirts/top_icon_06.svg';
import Shirts_7 from './shirts/top_icon_07.svg';
import Shirts_8 from './shirts/top_icon_08.svg';

import Pants_1 from './pants/bottom_icon_01.svg';
import Pants_2 from './pants/bottom_icon_02.svg';
import Pants_3 from './pants/bottom_icon_03.svg';
import Pants_4 from './pants/bottom_icon_04.svg';
import Pants_5 from './pants/bottom_icon_05.svg';
import Pants_6 from './pants/bottom_icon_06.svg';
import Pants_7 from './pants/bottom_icon_07.svg';
import Pants_8 from './pants/bottom_icon_08.svg';

import Shoes_1 from './shoes/shoes_icon_01.svg';
import Shoes_2 from './shoes/shoes_icon_02.svg';
import Shoes_3 from './shoes/shoes_icon_03.svg';
import Shoes_4 from './shoes/shoes_icon_04.svg';
import Shoes_5 from './shoes/shoes_icon_05.svg';
import Shoes_6 from './shoes/shoes_icon_06.svg';
import Shoes_7 from './shoes/shoes_icon_07.svg';
import Shoes_8 from './shoes/shoes_icon_08.svg';

export interface MenuIconProps {
  className?: string;
  color: ColorTypes;
  number: number;
  type: CreatingBoxStatus;
  onClick?: (props: {
    type: CreatingBoxStatus,
    number: number,
    color: ColorTypes,
  }) => void;
}

export const prettyColor = (color: string): string => {
  switch (color) {
    case ColorTypes.RED: {
      return 'tree-fill-color-red'
    }
    case ColorTypes.ORANGE: {
      return 'tree-fill-color-orange'
    }
    case ColorTypes.YELLOW: {
      return 'tree-fill-color-yellow'
    }
    case ColorTypes.GREEN: {
      return 'tree-fill-color-green'
    }
    case ColorTypes.MINT: {
      return 'tree-fill-color-mint'
    }
    case ColorTypes.BLUE: {
      return 'tree-fill-color-blue'
    }
    case ColorTypes.PINK: {
      return 'tree-fill-color-pink'
    }
    case ColorTypes.PURPLE: {
      return 'tree-fill-color-purple'
    }
    default:
      return '';
  }
}

const menuIcons = {
  hair: [
    <Hair_1 />,
    <Hair_2 />,
    <Hair_3 />,
    <Hair_4 />,
    <Hair_5 />,
    <Hair_6 />,
    <Hair_7 />,
    <Hair_8 />,
  ],
  shirts: [
    <Shirts_1 />,
    <Shirts_2 />,
    <Shirts_3 />,
    <Shirts_4 />,
    <Shirts_5 />,
    <Shirts_6 />,
    <Shirts_7 />,
    <Shirts_8 />,
  ],
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
    <Shoes_1 />,
    <Shoes_2 />,
    <Shoes_3 />,
    <Shoes_4 />,
    <Shoes_5 />,
    <Shoes_6 />,
    <Shoes_7 />,
    <Shoes_8 />,
  ],
}

export const MenuIcon = ({
  className,
  color,
  number,
  type,
  onClick,
}: MenuIconProps): React.ReactElement => {
  return (
    <div
      className={`tree-menu-icon ${prettyColor(color)} ${className}`}
      onClick={() => onClick?.({ type, number, color })}
    >
      {menuIcons?.[type]?.[number]}
    </div>
  )
}
