import React from 'react';
import './index.css';
import { CompleteButton } from './CompleteButton';

export const KakaoTalkButton = (): React.ReactElement => {
   return (
      <CompleteButton deeplink="kakaotalk://" buttonText="카카오톡 공유하기" />
    );
};
