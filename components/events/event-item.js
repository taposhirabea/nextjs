import Link from "next/link";
import Image from 'next/image';
import Button from "../../pages/ui/button";

export default function EventItem(props) {
  
  const { name, image, date, location, id} = props
  const humanDate = new Date(date).toLocaleTimeString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const formateAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`  
  
  return (
    <li className="item">
        <img src={image} alt={name} width={250} height={160}/>
        <div className="content" >
            <div className="summary">
                <h2>{name}</h2>
                <div className="date">
                    <time>{humanDate}</time>
                </div>
                <div className="address">
                    <address>{formateAddress}</address>
                </div>
            </div>
            <div className="actions ">
                {/* <Link href={exploreLink}>Explore Link</Link> */}
                <Button link={exploreLink}>Explore Link</Button>
            </div>
        </div>
    </li>
  )
}
