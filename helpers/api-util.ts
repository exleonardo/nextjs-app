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

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents()

  return allEvents.filter(event => event.isFeatured)
}
export const getEventById = async (id: string) => {
  const allEvents = await getAllEvents()

  return allEvents.find(event => event.id === id)
}
