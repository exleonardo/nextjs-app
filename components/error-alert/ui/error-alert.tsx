import { PropsWithChildren } from 'react'

import s from 'components/error-alert/style/error-alert.module.scss'

export const ErrorAlert = ({ children }: PropsWithChildren) => {
  return <div className={s.alert}>{children}</div>
}
