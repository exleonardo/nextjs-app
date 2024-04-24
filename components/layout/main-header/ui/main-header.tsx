import { PropsWithChildren, ReactElement } from 'react'

import { Layout } from '@/layout/layout'
import { NextPage } from 'next'
import Link from 'next/link'
import { NotificationContextProvider } from 'store/notification-context'

import s from '../style/main-header.module.scss'
export const MainHeader = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Link href={'/'}>Next Events</Link>
      </div>
      <nav className={s.navigation}>
        <ul>
          <li>
            <Link href={'/events'}>Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export const BaseLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return <Layout>{children}</Layout>
}

export const getLayout = (page: ReactElement) => {
  return (
    <NotificationContextProvider>
      <BaseLayout>{page}</BaseLayout>
    </NotificationContextProvider>
  )
}
