import { Button } from '@/button'

import s from '../style/results-title.module.scss'
type ResultsTitleProps = {
  date: Date
}
export const ResultsTitle = ({ date }: ResultsTitleProps) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <section className={s.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button as={'a'} href={'/events'}>
        Show all events
      </Button>
    </section>
  )
}
