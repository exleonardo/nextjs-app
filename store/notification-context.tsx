import { PropsWithChildren, createContext, useEffect, useState } from 'react'

import { NotificationProps } from '@/notification'

export type ContextTypeNotification = {
  hideNotification: () => void
  notification: NotificationProps | null
  showNotification: (value: NotificationProps) => void
}
export const NotificationContext = createContext({
  hideNotification: function () {},
  notification: null,
  showNotification: function (notificationData: NotificationProps) {},
})
export const NotificationContextProvider = ({ children }: PropsWithChildren) => {
  const [activeNotification, setActiveNotification] = useState<NotificationProps | null>(null)

  useEffect(() => {
    if (
      (activeNotification !== null && activeNotification?.status === 'success') ||
      activeNotification?.status === 'error'
    ) {
      const timer = setTimeout(() => {
        hideNotificationHandler()
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [activeNotification])
  function showNotificationHandler(notificationData: NotificationProps) {
    setActiveNotification(notificationData)
  }

  function hideNotificationHandler() {
    setActiveNotification(null)
  }
  const context: ContextTypeNotification = {
    hideNotification: hideNotificationHandler,
    notification: activeNotification,
    showNotification: showNotificationHandler,
  }

  return <NotificationContext.Provider value={context}>{children}</NotificationContext.Provider>
}
