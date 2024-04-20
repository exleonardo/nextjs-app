const DUMMY_EVENTS = [
  {
    date: '2021-05-12',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    id: 'e1',
    image: 'images/coding-event.jpg',
    isFeatured: false,
    location: 'Somestreet 25, 12345 San Somewhereo',
    title: 'Programming for everyone',
  },
  {
    date: '2021-05-30',
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    id: 'e2',
    image: 'images/introvert-event.jpg',
    isFeatured: true,
    location: 'New Wall Street 5, 98765 New Work',
    title: 'Networking for introverts',
  },
  {
    date: '2022-04-10',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    id: 'e3',
    image: 'images/extrovert-event.jpg',
    isFeatured: true,
    location: 'My Street 12, 10115 Broke City',
    title: 'Networking for extroverts',
  },
]

export const getFeaturedEvents = () => {
  return DUMMY_EVENTS.filter(event => event.isFeatured)
}

export function getAllEvents() {
  return DUMMY_EVENTS
}
type FilteredEvents = {
  month: number
  year: number
}
export function getFilteredEvents(dateFilter: FilteredEvents) {
  const { month, year } = dateFilter

  return DUMMY_EVENTS.filter(event => {
    const eventDate = new Date(event.date)

    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
  })
}

export function getEventById(id: string) {
  return DUMMY_EVENTS.find(event => event.id === id)
}
