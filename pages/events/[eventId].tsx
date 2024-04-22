import { ErrorAlert } from '@/error-alert'
import { EventContent, EventLogistics, EventSummary } from '@/event-detail'
import { Comments } from '@/input'
import { getLayout } from '@/layout/main-header'
import { ItemType, getEventById, getFeaturedEvents } from 'helpers/api-util'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

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
    revalidate: 30,
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getFeaturedEvents()
  const paths = events.map(event => ({ params: { eventId: event.id } }))

  return { fallback: 'blocking', paths }
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
      <Head>
        <title>{event.title}</title>
        <meta content={event.description} name={'description'} />
      </Head>
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
      <Comments eventId={event.id} />
    </>
  )
}

EventDetailPage.getLayout = getLayout
export default EventDetailPage
