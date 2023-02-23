import React from 'react';
import './index.css';
import { CompleteButton } from './CompleteButton';

export const InstagramButton = (): React.ReactElement => {
   return (
      <CompleteButton deeplink="instagram://" buttonText="인스타그램 공유하기" />
    );
};
