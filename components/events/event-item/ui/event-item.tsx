import { Button } from '@/button'
import AddressIcon from '@/icons/address-icon'
import ArrowRightIcon from '@/icons/arrow-right-icon'
import DateIcon from '@/icons/date-icon'
import { ItemType } from 'helpers/api-util'
import Image from 'next/image'

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
      <Image alt={title} height={160} src={'/' + image} width={250} />
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
