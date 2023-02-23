import React from 'react';
import './index.css';

interface LandingPageProps {
  className?: string;
}

export const LandingPage = ({
  className,
}: LandingPageProps): React.ReactElement => {
  return (
    <div className={`${className} tree-lading-page`}>

    </div>
  );
};
