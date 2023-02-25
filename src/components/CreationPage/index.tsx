import React from 'react';
import { GlobalContext, PageStatus, useGlobalContext } from '../../lib/GlobalContext';
import { Icon, IconTypes } from '../Icon';
import './index.css';

import CreatingBoxSvg from './creating-box.svg';

interface CreationPageProps {
  className?: string;
}

export const CreationPage = ({
  className,
}: CreationPageProps): React.ReactElement => {
  const {
    setPage
  } = useGlobalContext() as GlobalContext;
  return (
    <div className={`${className} tree-creation-page`}>
      <div className='tree-creation-page__header'>
        <Icon
          className='tree-creation-page__header__back-button'
          type={IconTypes.LEFT_ARROW}
          onClick={() => {
            setPage(PageStatus.SELECTING)
          }}
        />
        <Icon
          className='tree-creation-page__header__title-logo'
          type={IconTypes.LOGO}
        />
      </div>
      <Icon
        className='tree-creation-page__step-description'
        type={IconTypes.STEP_2}
      />
      <img
        className='tree-creation-page__creating-box'
        src={CreatingBoxSvg}
      />
    </div>
  );
};
