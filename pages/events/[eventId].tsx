import { ErrorAlert } from '@/error-alert'
import { EventContent, EventLogistics, EventSummary } from '@/event-detail'
import { ItemType } from '@/events'
import { getLayout } from '@/layout/main-header'
import { getAllEvents, getEventById, getFeaturedEvents } from 'helpers/api-util'
import { GetStaticPaths, GetStaticProps } from 'next'

type EventDetailPageProps = {
  event: ItemType
}
export const getStaticProps: GetStaticProps = async context => {
  const eventId = context.params.eventId as string
  const event = await getEventById(eventId)

  return {
    props: {
      event,
    },
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getFeaturedEvents()
  const paths = events.map(event => ({ params: { eventId: event.id } }))

  return { fallback: true, paths }
}

const EventDetailPage = ({ event }: EventDetailPageProps) => {
  if (!event) {
    return (
      <ErrorAlert>
        <p>no event found</p>
      </ErrorAlert>
    )
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        address={event.location}
        date={event.date}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  )
}

EventDetailPage.getLayout = getLayout
export default EventDetailPage
