import { PropsWithChildren } from 'react'

import s from '../style/event-content.module.scss'

type EventContentProps = {} & PropsWithChildren
export const EventContent = ({ children }: EventContentProps) => {
  return <section className={s.content}>{children}</section>
}
