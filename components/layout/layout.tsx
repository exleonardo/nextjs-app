import { PropsWithChildren, ReactElement } from 'react'

import { MainHeader } from '@/layout/main-header'
import { NextPage } from 'next'

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  )
}
