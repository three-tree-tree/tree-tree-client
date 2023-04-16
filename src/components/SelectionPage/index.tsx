import React from 'react';
import { GlobalContext, PageStatus, useGlobalContext } from '../../lib/GlobalContext';
import * as actionTypes from '../../lib/dux/actionTypes';
import { Button, ButtonTypes } from '../Button';
import { Icon, IconTypes } from '../Icon';
import './index.css';
import { InterestingIssueType } from '../../lib/dux/initialState';

export interface SelectionPageProps {
  className?: string;
}

export const SelectionPage = ({
  className,
}: SelectionPageProps): React.ReactElement => {
  const { setPage, treeDispatcher } = useGlobalContext() as GlobalContext;
  return (
    <div className={`${className} tree-selection-page`}>
      <div className='tree-selection-page__header'>
        <Icon
          className='tree-selection-page__header__back-button'
          type={IconTypes.LEFT_ARROW}
          onClick={() => {
            setPage(PageStatus.PROMISE)
          }}
        />
        <Icon
          className='tree-selection-page__header__title-logo'
          type={IconTypes.LOGO}
        />
      </div>
      <Icon
        className='tree-selection-page__step-description'
        type={IconTypes.STEP_1}
      />
      <div className='tree-selection-page__selections'>
        <Button
          type={ButtonTypes.SAVE_PAPER}
          onClick={() => {
            setPage(PageStatus.CREATING)
            treeDispatcher({
              type: actionTypes.SELECT_INTERESTS,
              payload: InterestingIssueType.SAVING_PAPER,
            })
          }}
        />
        <Button
          type={ButtonTypes.REDUCE_TRASH}
          onClick={() => {
            setPage(PageStatus.CREATING)
            treeDispatcher({
              type: actionTypes.SELECT_INTERESTS,
              payload: InterestingIssueType.REDUCING_TRASH,
            })
          }}
        />
        <Button
          type={ButtonTypes.SAVE_ENERGY}
          onClick={() => {
            setPage(PageStatus.CREATING)
            treeDispatcher({
              type: actionTypes.SELECT_INTERESTS,
              payload: InterestingIssueType.SAVING_ENERGY,
            })
          }}
        />
        <Button
          type={ButtonTypes.USE_BASKET}
          onClick={() => {
            setPage(PageStatus.CREATING)
            treeDispatcher({
              type: actionTypes.SELECT_INTERESTS,
              payload: InterestingIssueType.USING_BASKET,
            })
          }}
        />
        <Button
          type={ButtonTypes.USE_ELEC_RECEIPT}
          onClick={() => {
            setPage(PageStatus.CREATING)
            treeDispatcher({
              type: actionTypes.SELECT_INTERESTS,
              payload: InterestingIssueType.USING_ELEC_RECEIPT,
            })
          }}
        />
      </div>
    </div>
  );
};
