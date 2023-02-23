import React from 'react';
import './index.css';

interface LoadingPageProps {
  className?: string;
}

export const LoadingPage = ({
  className,
}: LoadingPageProps): React.ReactElement => {
  return (
    <div className={`${className} tree-loading-page`}>
      
    </div>
  );
};
