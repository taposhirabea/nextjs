import EventItem from './event-item'

export default function EventList(props) {
    const {items} = props;
  return (
    <ul className='list'>
        {items.map(event => (<EventItem 
        key={event.id}
        name={event.name}
        location = {event.location}
        id = {event.id}
        date = {event.date}
        image = {event.image}/>))}
    </ul>
  )
}
