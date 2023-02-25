import React, { useState } from 'react';
import axios from 'axios';
import CopyToClipboard from 'react-copy-to-clipboard';
import './index.css';

interface CompleteButtonProps {
  deeplink: string;
  buttonImage: React.ReactElement;
}

const SERVER_HOST = "http://localhost:8080"
const HASH_TAG_MESSAGE = "#지구방위대_지구를지켜라 #지구방위대캠페인 #환경보호캠페인 #깨끗한지구만들기"

export const CompleteButton = ({
  deeplink,
  buttonImage,
}: CompleteButtonProps): React.ReactElement => {
    const handleOnCopy = () => {
        // visit count ++ 
        postJoin();
        // instagram app link로 이동
        window.location.replace(deeplink); 
    }

    const postJoin = () => {
        // fire and forget
        axios.post(SERVER_HOST + "/people/join");
    }
    
   return (
        <CopyToClipboard text={HASH_TAG_MESSAGE} onCopy={handleOnCopy}>
            {buttonImage}
        </CopyToClipboard>
    );
};
