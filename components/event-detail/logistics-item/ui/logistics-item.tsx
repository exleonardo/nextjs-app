import { ComponentType, PropsWithChildren } from 'react'

import s from '../style/logistics-item.module.scss'

type LogisticsItemProps = {
  icon: ComponentType
} & PropsWithChildren
export const LogisticsItem = ({ children, icon }: LogisticsItemProps) => {
  const Icon = icon

  return (
    <li className={s.item}>
      <span className={s.icon}>
        <Icon />
      </span>
      <span className={s.content}>{children}</span>
    </li>
  )
}
