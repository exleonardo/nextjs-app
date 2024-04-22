import { EventList } from '@/events'
import { NewsletterRegistration } from '@/input'
import { getLayout } from '@/layout/main-header'
import { ItemType, getFeaturedEvents } from 'helpers/api-util'
import { GetStaticProps } from 'next'
import Head from 'next/head'

type HomeType = {
  events: ItemType[]
}
const Home = ({ events }: HomeType) => {
  return (
    <div>
      <Head>
        <title> Next js Events</title>
        <meta
          content={'Find a lot of great events that allow you to evolve..'}
          name={'description'}
        />
      </Head>
      <NewsletterRegistration />
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
