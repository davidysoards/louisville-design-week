import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import EventCard from './EventCard';

export default function Events() {
  const [myEvents, setMyEvents] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function fetchEvents() {
    const res = await axios.get(
      'https://www.eventbriteapi.com/v3/events/search/',
      {
        params: {
          token: `${process.env.GATSBY_EB_TOKEN}`,
          'organizer.id': '846197205',
          expand: 'venue',
          q: 'design+week',
          sort_by: 'date',
        },
      }
    );
    const events = await res.data.events;
    // console.log(events);
    return events;
  }

  useEffect(() => {
    setIsLoading(true);
    async function updateMyEvents() {
      setMyEvents(await fetchEvents());
    }
    updateMyEvents();
    setIsLoading(false);
  }, []);

  if (isLoading)
    return (
      <div>
        <p>Loading ...</p>
      </div>
    );

  if (!myEvents)
    return (
      <div>
        <p>Check back for the official list of Eventbrite Events.</p>
      </div>
    );

  return (
    <>
      <Grid>
        {myEvents.map(event => {
          const { name, logo, start, end, venue, url } = event;
          return (
            <EventCard
              name={name.text}
              logo={logo ? logo.url : null}
              start={start.local}
              end={end.local}
              venue={venue ? venue.name : null}
              url={url}
              key={name.text}
            />
          );
        })}
      </Grid>
    </>
  );
}

const Grid = styled.section`
  display: grid;
  grid-gap: 20px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
