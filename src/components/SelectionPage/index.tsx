import React from 'react';
import { GlobalContext, PageStatus, useGlobalContext } from '../../lib/GlobalContext';
import * as actionTypes from '../../lib/dux/actionTypes';
import { Button, ButtonTypes } from '../Button';
import { Icon, IconTypes } from '../Icon';
import './index.css';
import '../common.css'
import { InterestingIssueType } from '../../lib/dux/initialState';

import TopTitleLogo from '../Icon/logo.svg'
import BackButton from '../Icon/left-arrow.svg'
import Sparkle from '../../svgs/sparkle.svg';

export interface SelectionPageProps {
  className?: string;
}

export const SelectionPage = ({
  className,
}: SelectionPageProps): React.ReactElement => {
  const { setPage, treeDispatcher } = useGlobalContext() as GlobalContext;
  // return (
  //   <div className={`${className} tree-selection-page`}>
  //     <div className='tree-selection-page__header'>
  //       <Icon
  //         className='tree-selection-page__header__back-button'
  //         type={IconTypes.LEFT_ARROW}
  //         onClick={() => {
  //           setPage(PageStatus.PROMISE)
  //         }}
  //       />
  //       <Icon
  //         className='tree-selection-page__header__title-logo'
  //         type={IconTypes.LOGO}
  //       />
  //     </div>
  //     <div>
  //       <Sparkle />
  //       STEP 01
  //       <Sparkle />
  //     </div>
  //     <div>
  //       그린가디언즈로서 모범이 되기 위해<br/>
  //       어떤 노력을 할 것인지 한 가지 선택해주세요!
  //     </div>

  //     <div>* 선택에 따라, 가디언즈의 아이템이 바뀌어요.</div>

  //     <div className='tree-selection-page__selections'>
  //       <Button
  //         type={ButtonTypes.SAVE_PAPER}
  //         onClick={() => {
  //           setPage(PageStatus.CREATING)
  //           treeDispatcher({
  //             type: actionTypes.SELECT_INTERESTS,
  //             payload: InterestingIssueType.SAVING_PAPER,
  //           })
  //         }}
  //       />
  //       <Button
  //         type={ButtonTypes.REDUCE_TRASH}
  //         onClick={() => {
  //           setPage(PageStatus.CREATING)
  //           treeDispatcher({
  //             type: actionTypes.SELECT_INTERESTS,
  //             payload: InterestingIssueType.REDUCING_TRASH,
  //           })
  //         }}
  //       />
  //       <Button
  //         type={ButtonTypes.SAVE_ENERGY}
  //         onClick={() => {
  //           setPage(PageStatus.CREATING)
  //           treeDispatcher({
  //             type: actionTypes.SELECT_INTERESTS,
  //             payload: InterestingIssueType.SAVING_ENERGY,
  //           })
  //         }}
  //       />
  //       <Button
  //         type={ButtonTypes.USE_BASKET}
  //         onClick={() => {
  //           setPage(PageStatus.CREATING)
  //           treeDispatcher({
  //             type: actionTypes.SELECT_INTERESTS,
  //             payload: InterestingIssueType.USING_BASKET,
  //           })
  //         }}
  //       />
  //       <Button
  //         type={ButtonTypes.USE_ELEC_RECEIPT}
  //         onClick={() => {
  //           setPage(PageStatus.CREATING)
  //           treeDispatcher({
  //             type: actionTypes.SELECT_INTERESTS,
  //             payload: InterestingIssueType.USING_ELEC_RECEIPT,
  //           })
  //         }}
  //       />
  //     </div>
  //   </div>
  // );

  return (
    <div className='container'>
      <div className='top-title'>
        <div className='back-button' onClick={() => {setPage(PageStatus.PROMISE)}}>
          <BackButton />
        </div>
        <div className='top-title-logo'>
            <TopTitleLogo />
        </div>
        <div className='top-title-right'></div>
      </div>
      <div className='selection-page__content-wrap'>
        <div className='page__content-title'>
          <div className='page__content-title-sparkle'>
            <Sparkle />
          </div>
          <p>STEP 01</p>
          <div className='page__content-title-sparkle'>
            <Sparkle />
          </div>
        </div>
        <div className='selection-page__content'>
          <p>
            그린가디언즈로서 모범이 되기 위해<br/>
            어떤 노력을 할 것인지 한 가지 선택해주세요!
          </p>
          <p>* 선택에 따라, 가디언즈의 아이템이 바뀌어요.</p>
        </div>
      </div>
      <div className='selection-page__button_list'>
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
  )
};
