import React from 'react';

import { Icon, IconTypes } from '../Icon';
import { PageStatus, useGlobalContext, GlobalContext } from '../../lib/GlobalContext';

import './index.css';

interface PromisePageProps {
  className?: string;
}

export const PromisePage = ({
  className,
}: PromisePageProps): React.ReactElement => {
  const { setPage } = useGlobalContext() as GlobalContext;

  return (
    <div className={`${className} tree-promise-page`}>
      <div className='tree-promise-page__header'>
        <Icon
          className='tree-promise-page__header__back-button'
          type={IconTypes.LEFT_ARROW}
          onClick={() => {
            setPage(PageStatus.CREATING)
          }}
        />
        <Icon
          className='tree-promise-page__header__title-logo'
          type={IconTypes.LOGO}
        />
      </div>
    </div>
  )
};
