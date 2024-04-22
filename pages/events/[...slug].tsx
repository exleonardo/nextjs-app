import { useEffect, useState } from 'react'

import { Button } from '@/button'
import { ErrorAlert } from '@/error-alert'
import { EventList } from '@/events'
import { ResultsTitle } from '@/events/results-title'
import { getLayout } from '@/layout/main-header'
import { ItemType } from 'helpers/api-util'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const FilterdEventsPage = () => {
  const [loadedEvents, setLoadedEvents] = useState<ItemType[]>()
  const router = useRouter()
  const filterDate = router.query.slug

  const { data, error, isLoading } = useSWR(
    'https://test-proj-e8acb-default-rtdb.firebaseio.com/events.json',
    url => fetch(url).then(res => res.json())
  )

  useEffect(() => {
    if (data) {
      const events = []

      for (const key in data) {
        events.push({ id: key, ...data[key] })
      }
      setLoadedEvents(events)
    }
  }, [data])
  if (!loadedEvents) {
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
    numMonth > 12 ||
    error
  ) {
    return (
      <ErrorAlert>
        <p>Invalied filter. Please adjust your values!</p>
        <div className={'center'}>
          <Button as={'a'} href={'/events'}>
            Show All Events
          </Button>
        </div>
      </ErrorAlert>
    )
  }

  const filteredEvents = loadedEvents.filter(event => {
    const eventDate = new Date(event.date)

    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1
  })

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
