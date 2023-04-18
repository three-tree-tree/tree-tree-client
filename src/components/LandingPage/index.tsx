import React, { useState, useEffect } from 'react';
import { GlobalContext, PageStatus, useGlobalContext } from '../../lib/GlobalContext';
import axios from 'axios';
import CountUp from 'react-countup';

import TopLogo from './top-logo.png';
import Earth from './earth.png';
import Sparkle from './sparkle.svg';
import IcNextButton from '../Icon/next-button.svg'

import './index.css';

const SERVER_HOST = "https://wordway.cafe24.com"
const INSTAGRAM_FEED_URL = "https://www.instagram.com/explore/tags/%EC%A7%80%EA%B5%AC%EB%B0%A9%EC%9C%84%EB%8C%80_%EC%A7%80%EA%B5%AC%EB%A5%BC%EC%A7%80%EC%BC%9C%EB%9D%BC/"

interface LandingPageProps {
  className?: string;
}

export const LandingPage = ({
  className,
}: LandingPageProps): React.ReactElement => {
  const { setPage } = useGlobalContext() as GlobalContext;
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

  const handleOnClickFeedButton = () => {
    window.location.href = INSTAGRAM_FEED_URL;
  }

  const handleOnClickJoinButton = () => {
    setPage(PageStatus.PROMISE);
  }

  const getPeopleStartCount = () => {
    if (peopleCount == undefined) return 0
    if(peopleCount > 20) {
      return peopleCount - 20
    } else {
      return 0
    }
  }

  return (
    <div className={`${className} landing-page__container`}>
      <div className='landing-page__title-logo'>
        <img className='landing-page__title-logo-img' src={TopLogo} />
      </div>
      <div className='landing-page__people-count-wrap'>
        <p>현재까지 합류한 그린 가디언즈</p>
        {
          peopleCount &&
          <CountUp
            start={getPeopleStartCount()}
            end={peopleCount}
            duration={7}
            suffix='명'
          />
        }
        {
          peopleCount == undefined &&
          "0명"
        }
      </div>
      <div className='landing-page__main-logo'>
        <img className='landing-page__main-logo-earth' src={Earth} />
        {/* <img className='landing-page__main-logo-bg' src={Sparkle} /> */}
        <div className='landing-page__main-logo-bg'>
          <Sparkle />
        </div>
      </div>
      <div className='landing-page__content-wrap'>
        <p className='landing-page__content'>
          우리의 아름다운 별, 지구가 아파하고 있어요.<br />
          지구를 지키기 위한 그린 가디언즈가 되어주세요!
        </p>
        <div className='landing-page__start-btn' onClick={handleOnClickJoinButton}>
          <div></div>
          그린 가디언즈 합류하기
          <div className='landing-page__start-btn__icon'>
            <IcNextButton />
          </div>
        </div>
      </div>
    </div>
  )
};
