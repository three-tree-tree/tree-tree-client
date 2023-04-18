import React from 'react';
import axios from 'axios';
import CopyToClipboard from 'react-copy-to-clipboard';

import './index.css';
import IcNextButton from '../Icon/next-button.svg'

interface CompleteButtonProps {
  className?: string;
  popupFun: (open: boolean) => void;
  handleSaveFile: () => void;
}

const SERVER_HOST = "https://wordway.cafe24.com"
const HASH_TAG_MESSAGE = "#그린가디언즈 #깨끗한지구만들기 #지구의날 #그린가디언즈_지구를지켜라"

export const CompleteButton = ({
  className,
  popupFun,
  handleSaveFile,
}: CompleteButtonProps): React.ReactElement => {
    const isMobile = () => {
      const userAgent = navigator.userAgent;
      return /Mobi/i.test(userAgent);
    }

    const handleOnCopy = (imageFile: Blob | string) => {
      // handleSaveFile() // 운영 체제에 따라 다르게 동작하므로 제거
      popupFun(true);
      // visit count ++ 
      postJoin();
      setTimeout(() => {
        popupFun(false);
        // instagram app link로 이동
        if (isMobile()) {
          window.location.href = "instagram://";
        } else {
          window.location.href = "https://www.instagram.com/";
        }
      }, 3000);
    }

    const postJoin = async () => {
        await axios.put(SERVER_HOST + "/people/join");
    }
    
   return (
    <CopyToClipboard text={HASH_TAG_MESSAGE} onCopy={handleOnCopy}>
      <div className='landing-page__start-btn'>
        <div></div>
        인스타그램으로 공유하기
        <div className='landing-page__start-btn__icon'>
          <IcNextButton />
        </div>
      </div>
    </CopyToClipboard>
  );
};
