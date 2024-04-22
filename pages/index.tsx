import { EventList, ItemType } from '@/events'
import { getLayout } from '@/layout/main-header'
import { getFeaturedEvents } from 'helpers/api-util'
import { GetStaticProps } from 'next'

type HomeType = {
  events: ItemType[]
}
const Home = ({ events }: HomeType) => {
  return (
    <div>
      <EventList items={events} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents()

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 30,
  }
}
Home.getLayout = getLayout
export default Home
