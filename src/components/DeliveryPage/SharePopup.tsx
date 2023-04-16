import React from 'react';


interface SharePopupProps {
    className?: string;
}

export const SharePopup = ({
    className,
}: SharePopupProps): React.ReactElement => {
    return (
        <div className={`${className} tree-delivery-page__share-popup`}>
          링크가 복사되었습니다! 친구에게 공유해보세요.
        </div>
    );
};
