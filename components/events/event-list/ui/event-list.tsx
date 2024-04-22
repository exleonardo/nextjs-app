import { EventItem } from '@/events'
import { EventListType } from 'helpers/api-util'

import s from '../style/event-list.module.scss'

export const EventList = ({ items }: EventListType) => {
  return (
    <ul className={s.list}>
      {items.map(event => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  )
}
