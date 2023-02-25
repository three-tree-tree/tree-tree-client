import React from 'react';

import ButtonImage from './instagram-button.svg'
import { CompleteButton } from './CompleteButton';


interface InstagramButtonProps {
   className?: string;
 }

export const InstagramButton = ({
   className,
}: InstagramButtonProps): React.ReactElement => {
   return (
      <CompleteButton deeplink="instagram://" buttonImage={<img className={className} src={ButtonImage} />} />
    );
};
