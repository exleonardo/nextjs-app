import { EventList } from '@/events'
import { EventsSearch } from '@/events/events-search'
import { getLayout } from '@/layout/main-header'
import { ItemType, getAllEvents } from 'helpers/api-util'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
export const getStaticProps: GetStaticProps = async () => {
  const events = await getAllEvents()

  return {
    props: {
      events,
    },
    revalidate: 60,
  }
}
type AllEventsPageProps = {
  events: ItemType[]
}
const AllEventsPage = ({ events }: AllEventsPageProps) => {
  const router = useRouter()

  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`

    router.push(fullPath)
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  )
}

AllEventsPage.getLayout = getLayout
export default AllEventsPage
