import React from 'react';
import { Navigator } from '../TemporaryNavigator';
import './index.css';

interface DeliveryPageProps {
  className?: string;
}

export const DeliveryPage = ({
  className,
}: DeliveryPageProps): React.ReactElement => {
  return (
    <div className={`${className} tree-delivery-page`}>
      완료 페이지 입니다
      <Navigator />
    </div>
  );
};
