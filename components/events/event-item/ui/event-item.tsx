import { Button } from '@/button'
import { ItemType } from '@/events'
import AddressIcon from '@/icons/address-icon'
import ArrowRightIcon from '@/icons/arrow-right-icon'
import DateIcon from '@/icons/date-icon'
import Link from 'next/link'

import s from '../style/event-item.module.scss'

export const EventItem = ({ date, id, image, location, title }: ItemType) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const formattedAddress = location.replace(', ', '\n')
  const exploreLink = `/events/${id}`

  return (
    <li className={s.item}>
      <img alt={title} src={'/' + image} />
      <div className={s.content}>
        <div className={s.summary}>
          <h2>{title}</h2>
          <div className={s.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={s.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={s.actions}>
          <Button as={'a'} href={exploreLink}>
            <span>Explore event</span>
            <span className={s.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}
