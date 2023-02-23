import React from 'react';
import './index.css';

export interface SelectionPageProps {
  className?: string;
}

export const SelectionPage = ({
  className,
}: SelectionPageProps): React.ReactElement => {
  return (
    <div className={`${className} tree-selection-page`}>

    </div>
  );
};
