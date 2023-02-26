import React from 'react';

import CompletePopupImage from './complete-popup.svg';
import CompletePopupImageBackground from './app_bg.svg';
import CompletePopupImageTxt from './save_txt.svg';

interface CompletePopupProps {
    className?: string;
}

export const CompletePopup = ({
    className,
}: CompletePopupProps): React.ReactElement => {
    return (
        <div className={`${className} tree-delivery-page__popup-modal_back`}>
            <CompletePopupImageBackground />
            <div className={`${className} tree-delivery-page__popup-modal_img`}>
                <CompletePopupImage />
            </div>
            <div className={`${className} tree-delivery-page__popup-modal_txt`}>
                <CompletePopupImageTxt />
            </div>
        </div>
    );
};
