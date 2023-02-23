import React from 'react';
import { Navigator } from '../TemporaryNavigator';
import './index.css';

interface CreationPageProps {
  className?: string;
}

export const CreationPage = ({
  className,
}: CreationPageProps): React.ReactElement => {
  return (
    <div className={`${className} tree-creation-page`}>
      꾸미기 페이지 입니다
      <Navigator />
    </div>
  );
};
