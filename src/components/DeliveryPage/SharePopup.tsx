import React from 'react';

import SharePopupImage from './share-popup.svg';

interface SharePopupProps {
    className?: string;
}

export const SharePopup = ({
    className,
}: SharePopupProps): React.ReactElement => {
    return (
        <div className={`${className} tree-delivery-page__share-popup`}>
            <SharePopupImage />
        </div>
    );
};
