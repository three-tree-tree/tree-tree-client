import React from 'react';

import { Icon, IconTypes } from '../Icon';
import { PageStatus, useGlobalContext, GlobalContext } from '../../lib/GlobalContext';

import EarchIcon from './earth_icon.svg'
import Character from './character.svg'

import './index.css';

interface PromisePageProps {
  className?: string;
}

export const PromisePage = ({
  className,
}: PromisePageProps): React.ReactElement => {
  const { setPage } = useGlobalContext() as GlobalContext;

  const handleOnClickJoinButton = () => {
    setPage(PageStatus.SELECTING);
  }

  return (
    <div className={`${className} tree-promise-page`}>
      <div className='tree-promise-page__header'>
        <Icon
          className='tree-promise-page__header__back-button'
          type={IconTypes.LEFT_ARROW}
          onClick={() => {
            setPage(PageStatus.LANDING)
          }}
        />
        <Icon
          className='tree-promise-page__header__title-logo'
          type={IconTypes.LOGO}
        />
      </div>
      <div className='tree-promise-page__promise-background'>
        <EarchIcon/>
        <div>
          그린가디언즈 서약서
        </div>
        <hr/>
        <div>
          그린가디언즈는 지구의 날을 맞이하여<br />
          보다 많은 사람들에게 환경문제에 대한<br />
          심각성을 알리고자 만들어진 온라인<br />
          환경보호 캠페인입니다.<br />
          일상생활 속에서<br />
          실천 가능한 환경보호 운동을 살펴보고<br />
          지구를 지키는 그린가디언즈가 되어주세요.<br />
          <br />
          지구를 지키는 나만의 가디언즈를<br />
          만들고,<br />
          해시태그와 함께 SNS에 올려<br />
          온라인 환경보호 캠페인에 참여해보세요!<br />
        </div>
        <hr/>
        <div>
          * 4월 22일은 ‘지구의 날’ 이에요.<br />
          저녁 8시부터 10분 간 전국적으로 진행되는<br />
          소등 행사에도 참여해보세요 !<br />
        </div>
          <Character/>
      </div>

      <div className='tree-landing-page__start-button' onClick={handleOnClickJoinButton}>
          그린 가디언즈 합류하기
        <span className='tree-landing-page__start-button__gt'>&gt;</span>
      </div>

    </div>
  )
};