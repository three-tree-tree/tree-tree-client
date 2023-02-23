import React from 'react';
import { Navigator } from '../TemporaryNavigator';
import './index.css';

interface LoadingPageProps {
  className?: string;
}

export const LoadingPage = ({
  className,
}: LoadingPageProps): React.ReactElement => {
  return (
    <div className={`${className} tree-loading-page`}>
      로딩페이지 입니다
      <Navigator />
    </div>
  );
};
