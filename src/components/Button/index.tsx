import React from 'react';
import './index.css';

export interface ButtonProps {
  className?: string;
  type: ButtonTypes;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export enum ButtonTypes {
  SAVE_PAPER,
  REDUCE_TRASH,
  SAVE_ENERGY,
  USE_BASKET,
  USE_ELEC_RECEIPT,
  INSTAGRAM_SHARE,
  RETRY,
  COPY_LINK,
}

const ImageSource = (props: { type: ButtonTypes, disabled: boolean }): React.ReactElement => {
  const { type, disabled } = props;
  switch (type) {
    case ButtonTypes.SAVE_PAPER: {
      return (
        <div className='tree-button-source save-paper'>
          이면지 사용 등 종이 아껴쓰기
        </div>
      )
    }
    case ButtonTypes.REDUCE_TRASH: {
      return (
        <div className='tree-button-source reduce-trash'>
          일회용품 / 플라스틱 사용 줄이기
        </div>
      )
    }
    case ButtonTypes.SAVE_ENERGY: {
      return (
        <div className='tree-button-source save-energy'>
          물, 전기 등 에너지 절약하기
        </div>
      )
    }
    case ButtonTypes.USE_BASKET: {
      return (
        <div className='tree-button-source use-basket'>
          비닐봉투 대신 장바구니 이용하기
        </div>
      )
    }
    case ButtonTypes.USE_ELEC_RECEIPT: {
      return (
        <div className='tree-button-source use-elec-receipt'>
          전자 영수증 / 모바일 청구서 이용하기
        </div>
      )
    }
    case ButtonTypes.INSTAGRAM_SHARE: {
      return (
        <div className="tree-button-source share-instagram">
          인스타그램으로 공유하기 
        </div>
      )
    }
    case ButtonTypes.COPY_LINK: {
      return (
        <div className="tree-button-source">
          링크 복사하기
        </div>
      )
    }
    case ButtonTypes.RETRY: {
      return (
        <div className="tree-button-source">
          다시 만들기
        </div>
      )
    }
    default:
      return <></>;
  }
}

export const Button = ({
  className,
  type,
  disabled = false,
  onClick,
}: ButtonProps): React.ReactElement => {

  return (
    <div
      className={`tree-button`}
      onClick={onClick}
    >
      <ImageSource type={type} disabled={disabled} />
    </div>
  )
}
