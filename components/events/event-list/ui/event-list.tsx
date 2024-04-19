import { EventItem } from '@/events'

import s from '../style/event-list.module.scss'
type EventListType = {
  items: ItemType[]
}
export type ItemType = {
  date: string
  description: string
  id: string
  image: string
  isFeatured: boolean
  location: string
  title: string
}
export const EventList = ({ items }: EventListType) => {
  return (
    <ul className={s.list}>
      {items.map(event => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  )
}
