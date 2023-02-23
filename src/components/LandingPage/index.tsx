import React, { useState, useEffect } from 'react';
import { PageStatus, useGlobalContext } from '../../lib/GlobalContext';
import { Button } from '../Button';
import { Icon, IconTypes } from '../Icon';
import axios from 'axios';

import './index.css';

const SERVER_HOST = "http://localhost:8080"

interface LandingPageProps {
  className?: string;
}

export const LandingPage = ({
  className,
}: LandingPageProps): React.ReactElement => {
  const { setPage } = useGlobalContext();
  const [peopleCount, setPeopleCount] = useState(undefined);

  useEffect(() => {
    axios
      .get(SERVER_HOST + "/people/count")
      .then((res) => {
        if (res.data.count > 0) {
          setPeopleCount(res.data.count);
        }
      })
  })

  return (
    <div className={`${className} tree-landing-page`}>
      <Icon
        className='tree-landing-page__title-logo'
        type={IconTypes.TITLE}
      />
      {
        peopleCount &&
        <div>
          <div> 현재까지 함께한 지구방위대원 </div>
          <div> {peopleCount} 명 </div>
        </div>
      }
      <div style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'gray',
        width: '100%',
        height: 500,
        fontSize: 14,
      }}>
        Place holder 지구방위대
        <br /><br />
        우리의 아름다운 집, 자구가 아파하고 있어요.<br />
        지구를 지키기 위해 지구 방위대원이 되어주세요!<br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        지구방위대는 보다 많은 사람들에게 환경문제에 대한 심각성을 알리고,<br/>
        이에 관심을 가질 수 있도록 만들어진 온라인 환경보호 캠페인입니다.<br/>
        나만의 캐릭터를 만들어 SNS에 올리고, 환경보호운동에 참여해보세요!<br/>
      </div>
      <Button
        className='tree-landing-page__start-button'
        onClick={() => {
          setPage(PageStatus.SELECTING)
        }}
        value="지구방위대 합류하기"
      />
    </div>
  );
};
