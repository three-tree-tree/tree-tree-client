import React from 'react';

import ButtonImage from './kakao-talk-button.svg'
import { CompleteButton } from './CompleteButton';


interface KakaoTalkButtonProps {
   className?: string;
 }

export const KakaoTalkButton = ({
   className,
}: KakaoTalkButtonProps): React.ReactElement => {
   return (
      <CompleteButton deeplink="kakaotalk://" buttonImage={<img className={className} src={ButtonImage} />} />
    );
};
