import { PropsWithChildren, useContext } from 'react'

import { MainHeader } from '@/layout/main-header'
import { Notification } from '@/notification'
import { NextPage } from 'next'
import { ContextTypeNotification, NotificationContext } from 'store/notification-context'

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  const { notification } = useContext<ContextTypeNotification>(NotificationContext)

  return (
    <>
      <MainHeader />
      <main>{children}</main>

      {notification && <Notification {...notification} />}
    </>
  )
}
