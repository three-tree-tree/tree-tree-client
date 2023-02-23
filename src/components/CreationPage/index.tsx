import React from 'react';
import './index.css';

interface CreationPageProps {
  className?: string;
}

export const CreationPage = ({
  className,
}: CreationPageProps): React.ReactElement => {
  return (
    <div className={`${className} tree-creation-page`}>

    </div>
  );
};
