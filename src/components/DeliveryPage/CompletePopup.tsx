import React from 'react';

import Characters from './characters.png'

interface CompletePopupProps {
    className?: string;
}

export const CompletePopup = ({
    className,
}: CompletePopupProps): React.ReactElement => {
    return (
        <div className={`${className} tree-delivery-page__popup-modal_back`}>
            <div className='tree-delivery-page__popup-modal__title'>
              해시태그 복사 & 이미지 저장완료! <br/>
              인스타그램으로 이동됩니다 :)
            </div>
            <p>
                해시태그를 인스타그램에 검색해보세요! <br />
                그린가디언즈들이 모여 만들어 낸 <br />
                깨끗한 지구의 모습을 볼 수 있어요!
            </p>
            <img
                className='tree-delivery-page__popup-modal_img'
                src={Characters}
            />
            <p>
                #그린가디언즈 #깨끗한지구만들기 <br/>
                #지구의날 #그린가디언즈_지구를지켜라
            </p>
        </div>
    );
};
