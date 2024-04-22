import { LogisticsItem } from '@/event-detail'
import AddressIcon from '@/icons/address-icon'
import DateIcon from '@/icons/date-icon'
import Image from 'next/image'

import s from '../style/event-logistics.module.scss'

type EventLogisticsProps = {
  address: string
  date: string
  image: string
  imageAlt: string
}
export const EventLogistics = (props: EventLogisticsProps) => {
  const { address, date, image, imageAlt } = props

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const addressText = address.replace(', ', '\n')

  return (
    <section className={s.logistics}>
      <div className={s.image}>
        <Image alt={imageAlt} height={400} src={`/${image}`} width={400} />
      </div>
      <ul className={s.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  )
}
