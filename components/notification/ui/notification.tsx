import { useContext } from 'react'

import { ContextTypeNotification, NotificationContext } from 'store/notification-context'

import s from '../style/notification.module.scss'

export type NotificationProps = {
  message: string
  status: 'error' | 'pending' | 'success'
  title: string
}
export const Notification = ({ message, status, title }: NotificationProps) => {
  const notificationCtx = useContext<ContextTypeNotification>(NotificationContext)

  let statusClasses = ''

  if (status === 'success') {
    statusClasses = s.success
  }

  if (status === 'error') {
    statusClasses = s.error
  }

  if (status === 'pending') {
    statusClasses = s.pending
  }

  const activeClasses = `${s.notification} ${statusClasses}`

  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  )
}
