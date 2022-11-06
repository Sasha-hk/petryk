import type { NextPage } from 'next';
import type React from 'react';

import { NavBar } from 'components/NavBar';

export const BaseLayout: NextPage<{
  children: React.ReactNode,
  fullFrame?: boolean,
}> = ({ children, fullFrame }) => {
  return (
    <>
      <NavBar />

      <div className={['2xl:py-16 sm:pt-4 sm:pb-20', fullFrame ? 'h-full' : 'min-h-full'].join(' ')}>
        { children }
      </div>
    </>
  )
}
