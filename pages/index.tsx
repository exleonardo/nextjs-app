import { EventList } from '@/events'
import { getLayout } from '@/layout/main-header'
import { getFeaturedEvents } from 'dummy-data'

const Home = () => {
  const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}

Home.getLayout = getLayout
export default Home
