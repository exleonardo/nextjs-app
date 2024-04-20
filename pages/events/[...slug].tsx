import { Button } from '@/button'
import { ErrorAlert } from '@/error-alert'
import { EventList } from '@/events'
import { ResultsTitle } from '@/events/results-title'
import { getLayout } from '@/layout/main-header'
import { getFilteredEvents } from 'dummy-data'
import { useRouter } from 'next/router'

const FilterdEventsPage = () => {
  const router = useRouter()
  const filterDate = router.query.slug

  if (!filterDate) {
    return <p className={'center'}>loading</p>
  }

  const filteredYear = filterDate[0]
  const filteredMonth = filterDate[1]

  const numYear = +filteredYear
  const numMonth = +filteredMonth

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <ErrorAlert>
        <p>Invalied filter. Please adjust your values!</p>
      </ErrorAlert>
    )
  }

  const filteredEvents = getFilteredEvents({ month: numMonth, year: numYear })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No Events found for the chosen filter!</p>
        </ErrorAlert>
        <div className={'center'}>
          <Button as={'a'} href={'/events'}>
            Show All Events
          </Button>
        </div>
      </>
    )
  }
  const date = new Date(numYear, numMonth - 1)

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  )
}

FilterdEventsPage.getLayout = getLayout
export default FilterdEventsPage
