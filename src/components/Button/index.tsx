import React from 'react';
import './index.css';

import StartJoin from './start-join.svg';
import SavePaper from './save-paper.svg';
import SavePaperDisabled from './save-paper-disabled.svg';
import ReduceTrash from './reduce-trash.svg';
import ReduceTrashDisabled from './reduce-trash-disabled.svg';
import SaveEnergy from './save-energy.svg';
import SaveEnergyDisabled from './save-energy-disabled.svg';
import UseBasket from './use-basket.svg';
import UseBasketDisabled from './use-basket-disabled.svg';
import UseElecReceipt from './use-elec-receipt.svg';
import UseElecReceiptDisabled from './use-elec-receipt-disabled.svg';
import FeedButton from './feed-button.svg';
import InstagramButton from './instagram-button.svg';

export interface ButtonProps {
  className?: string;
  type: ButtonTypes;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export enum ButtonTypes {
  START_JOIN,
  SAVE_PAPER,
  REDUCE_TRASH,
  SAVE_ENERGY,
  USE_BASKET,
  USE_ELEC_RECEIPT,
  INSTAGRAM_FEED,
  INSTAGRAM_SHARE,
}

const ImageSource = (props: { type: ButtonTypes, disabled: boolean }): React.ReactElement => {
  const { type, disabled } = props;
  switch (type) {
    case ButtonTypes.START_JOIN: {
      return (
        <div className='tree-button-source start-to-join'>
          <StartJoin />
        </div>
      )
    }
    case ButtonTypes.SAVE_PAPER: {
      return (
        <div className='tree-button-source save-paper'>
          {disabled ? <SavePaperDisabled /> : <SavePaper /> }
        </div>
      )
    }
    case ButtonTypes.REDUCE_TRASH: {
      return (
        <div className='tree-button-source reduce-trash'>
          {disabled ? <ReduceTrashDisabled /> : <ReduceTrash />}
        </div>
      )
    }
    case ButtonTypes.SAVE_ENERGY: {
      return (
        <div className='tree-button-source save-energy'>
          {disabled ? <SaveEnergyDisabled /> : <SaveEnergy />}
        </div>
      )
    }
    case ButtonTypes.USE_BASKET: {
      return (
        <div className='tree-button-source use-basket'>
          {disabled ? <UseBasketDisabled /> : <UseBasket />}
        </div>
      )
    }
    case ButtonTypes.USE_ELEC_RECEIPT: {
      return (
        <div className='tree-button-source use-elec-receipt'>
          {disabled ? <UseElecReceiptDisabled /> : <UseElecReceipt />}
        </div>
      )
    }
    case ButtonTypes.INSTAGRAM_FEED: {
      return (
        <img
          className="tree-button-source"
          src={FeedButton}
          />
      )
    }
    case ButtonTypes.INSTAGRAM_SHARE: {
      return (
        <img
          className="tree-button-source"
          src={InstagramButton}
          />
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
      className={`${className} tree-button`}
      onClick={onClick}
    >
      <ImageSource type={type} disabled={disabled} />
    </div>
  )
}
