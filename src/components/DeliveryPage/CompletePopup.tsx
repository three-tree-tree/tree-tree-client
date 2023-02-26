import React from 'react';

import CompletePopupImage from './complete-popup.svg';

interface CompletePopupProps {
    className?: string;
}

export const CompletePopup = ({
    className,
}: CompletePopupProps): React.ReactElement => {
    return (
        <div className={className}>
            <img className='tree-delivery-page__popup-modal_img' src={CompletePopupImage} />
        </div>
    );
};
