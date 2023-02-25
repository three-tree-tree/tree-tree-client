import React, { useMemo } from 'react';
import './index.css';

import Logo from './logo.svg'; // 지구방위대
import LeftArrow from './left-arrow.svg';
import CurrentMemberCount from './current-member-count.svg'; // 현재까지 참여한 지구 방위대

export const IconTypes = {
  CURRENT_COUNT: 'CURRENT_COUNT',
  LOGO: 'LOGO',
  LEFT_ARROW: 'LEFT_ARROW',
} as const;
export type IconTypes = typeof IconTypes[keyof typeof IconTypes];

export interface IconProps {
  className?: string;
  type: IconTypes;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Icon = ({
  className,
  type,
  onClick,
}: IconProps): React.ReactElement => {
  const iconBody = useMemo(() => {
    switch (type) {
      case IconTypes.LOGO: {
        return (
          <img
            className='tree-icon logo'
            src={Logo}
          />
        )
      }
      case IconTypes.CURRENT_COUNT: {
        return (
          <img
            className='tree-icon current-member-count'
            src={CurrentMemberCount}
          />
        )
      }
      case IconTypes.LEFT_ARROW: {
        return (
          <img
            className='tree-icon left-arrow'
            src={LeftArrow}
          />
        )
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
