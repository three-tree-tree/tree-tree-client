import React, { useMemo } from 'react';

export const IconTypes = {
  TITLE: '지구방위대',
  LEFT_ARROW: 'LEFT_ARROW',
  RIGHT_ARROW: 'RIGHT_ARROW',
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
      case IconTypes.TITLE: {
        return <span style={{ fontSize: 34 }}>'지구방위대'</span>
      }
      case IconTypes.LEFT_ARROW: {
        return (
          <div style={{
            width: 36,
            minHeight: 36,
            display: 'inline-flex',
            backgroundColor: 'greenyellow',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {'<'}
          </div>
        )
      }
      case IconTypes.RIGHT_ARROW: {
        return (
          <div style={{
            width: 36,
            minHeight: 36,
            display: 'inline-flex',
            backgroundColor: 'greenyellow',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {'>'}
          </div>
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
