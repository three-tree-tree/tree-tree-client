import React from 'react';
import { Navigator } from '../TemporaryNavigator';
import './index.css';

export interface SelectionPageProps {
  className?: string;
}

export const SelectionPage = ({
  className,
}: SelectionPageProps): React.ReactElement => {
  return (
    <div className={`${className} tree-selection-page`}>
      관심사 고르기 페이지 입니다
      <Navigator />
    </div>
  );
};
