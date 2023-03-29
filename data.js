const DUMMY_EVENTS = [
  {
    id: e1,
    name: "cat-1",
    price: 200.99,
    image:
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg",
    date: 3-1-22,
    isFeatured: true,
    location: 'sdcjsbdj '
  },
  {
    id: e2,
    name: "cat-2",
    price: 40.99,
    image:
      "https://cdn.pixabay.com/photo/2016/09/05/21/37/cat-1647775__340.jpg",
    date: 3-1-29,
    isFeatured: true,
    location: 'sdcjsbdj '
  },
  {
    id: e3,
    name: "cat-3",
    price: 129.99,
    image:
      "https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404__340.jpg",
    date: 3-1-26,
    isFeatured: true,
    location: 'sdcjsbdj '
  }
];

export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
    return DUMMY_EVENTS;
}
export function getFilteredEvents( dateFilter) {
   const {year, month} = dateFilter

   let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date)

    return event.getFullYear() === year && eventDate.getMonth() === month - 1;
   })
   
    return filteredEvents;
}
export default DUMMY_EVENTS

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}