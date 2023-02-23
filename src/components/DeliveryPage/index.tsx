import React from 'react';
import './index.css';

interface DeliveryPageProps {
  className?: string;
}

export const DeliveryPage = ({
  className,
}: DeliveryPageProps): React.ReactElement => {
  return (
    <div className={`${className} tree-delivery-page`}>

    </div>
  );
};
