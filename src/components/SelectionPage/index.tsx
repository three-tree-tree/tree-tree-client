import React from 'react';
import { PageStatus, useGlobalContext } from '../../lib/GlobalContext';
import { Button, ButtonTypes } from '../Button';
import { Icon, IconTypes } from '../Icon';
import './index.css';

export interface SelectionPageProps {
  className?: string;
}

export const SelectionPage = ({
  className,
}: SelectionPageProps): React.ReactElement => {
  const { setPage } = useGlobalContext();
  return (
    <div className={`${className} tree-selection-page`}>
      <div className='tree-selection-page__header'>
        <Icon
          className='tree-selection-page__header__back-button'
          type={IconTypes.LEFT_ARROW}
          onClick={() => {
            setPage(PageStatus.LANDING)
          }}
        />
        <Icon
          className='tree-selection-page__header__title-logo'
          type={IconTypes.LOGO}
        />
      </div>
      <div style={{
        marginTop: 100,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'gray',
        alignItems: 'center',
        height: 240,
      }}>
        STEP 01.<br />
        <br /><br />
        지구방위대원으로서 모범이 되기 위해<br />
        어떤 노력을 할 것인지 한 가지 선택해주세요!
      </div>
      <div className='tree-selection-page__selections'>
        <Button
          type={ButtonTypes.SAVE_PAPER}
          onClick={() => {
            
          }}
        />
        <Button
          type={ButtonTypes.REDUCE_TRASH}
          onClick={() => {

          }}
        />
        <Button
          type={ButtonTypes.SAVE_ENERGY}
          onClick={() => {

          }}
        />
        <Button
          type={ButtonTypes.USE_BASKET}
          onClick={() => {

          }}
        />
        <Button
          type={ButtonTypes.USE_ELEC_RECEIPT}
          onClick={() => {

          }}
        />
      </div>
    </div>
  );
};
