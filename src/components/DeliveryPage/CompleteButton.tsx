import React from 'react';
import axios from 'axios';
import CopyToClipboard from 'react-copy-to-clipboard';

import { Button, ButtonTypes } from '../Button';

import './index.css';

interface CompleteButtonProps {
  className?: string;
  popupFun: (open: boolean) => void;
}

const SERVER_HOST = "https://wordway.cafe24.com"
const HASH_TAG_MESSAGE = "#지구방위대_지구를지켜라 #지구방위대캠페인 #환경보호캠페인 #깨끗한지구만들기"

export const CompleteButton = ({
  className,
  popupFun,
}: CompleteButtonProps): React.ReactElement => {
    const handleOnCopy = () => {
      popupFun(true);
      // visit count ++ 
      postJoin();
      setTimeout(() => {
        popupFun(false);
        // instagram app link로 이동
        window.location.href = "https://www.instagram.com/";
      }, 3000);
    }

    const postJoin = async () => {
        await axios.put(SERVER_HOST + "/people/join");
    }
    
   return (
        <CopyToClipboard text={HASH_TAG_MESSAGE} onCopy={handleOnCopy}>
          <Button
            className={className}
            onClick={() => {}}
            type={ButtonTypes.INSTAGRAM_SHARE}
          />
        </CopyToClipboard>
    );
};
