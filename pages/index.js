 import { getFeaturedEvents } from  '../helpers/api-util';
//import { getFeaturedEvents } from  '../data';
import Link from "next/link"
import EventList from "../components/events/event-list";
import Head from 'next/head';
import Navbar from '@/components/nav';
import { useRef, useState } from 'react';


function HomePge(props) {


//const featuredEvents = getFeaturedEvents();
  return (
    <>
    <div>
      <Head>
        <title>Next Js</title>
      </Head>
      <Navbar/>
      <EventList items={props.events}/> 
       {/* <EventList items={featuredEvents}/>  */}
    </div>
    </>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

export default HomePge