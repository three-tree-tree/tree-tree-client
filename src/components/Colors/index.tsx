import React from 'react';

export const ColorTypes = {
  RED: 'red',
  ORANGE: 'orange',
  YELLOW: 'yellow',
  GREEN: 'green',
  BLUE: 'blue',
  PINK: 'pink',
  PURPLE: 'purple',
  WHITE: 'white',
}
export type ColorTypes = typeof ColorTypes[keyof typeof ColorTypes];

export interface ColorIconProps {
  className?: string;
  color: ColorTypes;
  onClick?: () => void;
}
export const ColorIcon = ({
  className,
  color,
  onClick,
}: ColorIconProps): React.ReactElement => {
  return (
    <div className={`${className} color-${color}`} onClick={onClick} />
  )
}
