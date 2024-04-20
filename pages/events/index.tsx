import { EventList } from '@/events'
import { EventsSearch } from '@/events/events-search'
import { getLayout } from '@/layout/main-header'
import { getAllEvents } from 'dummy-data'
import { useRouter } from 'next/router'

const AllEventsPage = () => {
  const router = useRouter()
  const events = getAllEvents()
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
