import React from 'react';
import './index.css';

export interface ButtonProps {
  className?: string;
  value: string;
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export const Button = ({
  className,
  value,
  onClick,
}: ButtonProps): React.ReactElement => {
  return (
    <input
      className={`${className} tree-button`}
      type="button"
      onClick={onClick}
      value={value}
    />
  )
}
