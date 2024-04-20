import { ErrorAlert } from '@/error-alert'
import { EventContent, EventLogistics, EventSummary } from '@/event-detail'
import { getLayout } from '@/layout/main-header'
import { getEventById } from 'dummy-data'
import { useRouter } from 'next/router'

const EventDetailPage = () => {
  const router = useRouter()

  const eventId = router.query.eventId as string
  const event = getEventById(eventId)

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
