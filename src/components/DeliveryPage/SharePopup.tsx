import React from 'react';


interface SharePopupProps {
    className?: string;
    targetName: string;
}

export const SharePopup = ({
    className,
    targetName,
}: SharePopupProps): React.ReactElement => {
    return (
        <div className={`${className} tree-delivery-page__share-popup`}>
          {targetName}가 복사되었습니다! 친구에게 공유해보세요.
        </div>
    );
};
