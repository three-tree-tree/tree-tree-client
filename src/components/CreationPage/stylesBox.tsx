import React from 'react';
import { CreatingBoxStatus } from '.';
import { ColorTypes } from '../Colors';
import { MenuIcon } from '../MenuIcon';

export interface StylesBoxProps {
  type: CreatingBoxStatus;
  color: ColorTypes;
  onClick?: (props: {
    type: CreatingBoxStatus,
    number: number,
    color: ColorTypes,
  }) => void;
}

export const StylesBox = ({
  type,
  color,
  onClick,
}: StylesBoxProps): React.ReactElement => {
  return (
    <div>
      <div>
        {[0, 1, 2, 3].map((number) => {
          return (
            <MenuIcon
              type={type}
              number={number}
              color={color}
              onClick={onClick}
            />
          )
        })}
      </div>
      <div>
      {[4, 5, 6, 7].map((number) => {
          return (
            <MenuIcon
              type={type}
              number={number}
              color={color}
              onClick={onClick}
            />
          )
        })}
      </div>
    </div>
  )
}
