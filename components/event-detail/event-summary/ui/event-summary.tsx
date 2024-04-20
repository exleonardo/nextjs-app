import s from '../style/event-summary.module.scss'

type EventSummaryProps = {
  title: string
}
export const EventSummary = ({ title }: EventSummaryProps) => {
  return (
    <section className={s.summary}>
      <h1>{title}</h1>
    </section>
  )
}
