export const getAllEvents = async () => {
  try {
    const response = await fetch('https://test-proj-e8acb-default-rtdb.firebaseio.com/events.json')
    const data = await response.json()
    const events = []

    for (const key in data) {
      events.push({ id: key, ...data[key] })
    }

    return events
  } catch (e) {
    return
  }
}
export type EventListType = {
  items: ItemType[]
}
export type ItemType = {
  date: string
  description: string
  id: string
  image: string
  isFeatured: boolean
  location: string
  title: string
}
export const getFeaturedEvents = async (): Promise<ItemType[]> => {
  const allEvents = await getAllEvents()

  return allEvents.filter(event => event.isFeatured)
}
export const getEventById = async (id: string): Promise<ItemType[]> => {
  const allEvents = await getAllEvents()

  return allEvents.find(event => event.id === id)
}

export type FilteredEvents = {
  month: number
  year: number
}
export const getFilteredEvents = async (dateFilter: FilteredEvents): Promise<ItemType[]> => {
  const { month, year } = dateFilter
  const allEvents = await getAllEvents()

  return allEvents.filter(event => {
    const eventDate = new Date(event.date)

    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
  })
}
