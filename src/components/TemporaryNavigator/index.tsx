import React from 'react';
import { GlobalContext, PageStatus, useGlobalContext } from '../../lib/GlobalContext';

export const Navigator = (): React.ReactElement => {
  const { setPage } = useGlobalContext() as GlobalContext;
  return (
    <ul>
      <li
        onClick={() => {
          setPage(PageStatus.LANDING)
        }}
      >
        Go 랜딩
      </li>
      <li
        onClick={() => {
          setPage(PageStatus.SELECTING)
        }}
      >
        Go 관심사 고르기
      </li>
      <li
        onClick={() => {
          setPage(PageStatus.CREATING)
        }}
      >
        Go 꾸미기
      </li>
      <li
        onClick={() => {
          setPage(PageStatus.DELIVERYING)
        }}
      >
        Go 마지막
      </li>
    </ul>
  )
}
