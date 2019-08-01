import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import EventCard from './EventCard';

const Events = () => {
  const [myEvents, setMyEvents] = useState();

  async function fetchEvents() {
    const res = await axios.get(
      'https://www.eventbriteapi.com/v3/events/search/',
      {
        params: {
          token: 'SM76GTFDOG4Z7JHHCB5J',
          'organizer.id': '846197205',
          expand: 'venue',
        },
      }
    );
    const events = await res.data.events;
    console.log(events);
    return events;
  }

  useEffect(() => {
    async function updateMyEvents() {
      setMyEvents(await fetchEvents());
    }
    updateMyEvents();
  }, []);

  if (!myEvents) return null;

  const { name, summary, logo, start, end, venue } = myEvents[0];
  return (
    <Container>
      <Heading>Upcoming Events</Heading>
      <Grid>
        <EventCard
          name={name.text}
          summary={summary}
          logo={logo.url}
          start={start.local}
          end={end.local}
          venue={venue.name}
        />
        <EventCard
          name={name.text}
          summary={summary}
          logo={logo.url}
          start={start.local}
          end={end.local}
          venue={venue.name}
        />
        <EventCard
          name={name.text}
          summary={summary}
          logo={logo.url}
          start={start.local}
          end={end.local}
          venue={venue.name}
        />
        <EventCard
          name={name.text}
          summary={summary}
          logo={logo.url}
          start={start.local}
          end={end.local}
          venue={venue.name}
        />
        <EventCard
          name={name.text}
          summary={summary}
          logo={logo.url}
          start={start.local}
          end={end.local}
          venue={venue.name}
        />
        <EventCard
          name={name.text}
          summary={summary}
          logo={logo.url}
          start={start.local}
          end={end.local}
          venue={venue.name}
        />
      </Grid>
    </Container>
  );
};

export default Events;

const Container = styled.section`
  margin: 0 auto;
  padding: 10px;
  max-width: 1200px;
`;

const Heading = styled.h1`
  font-size: 1.5em;
  text-transform: uppercase;
  margin: 0.5em 0;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 2em;
  }
  @media screen and (min-width: 1024px) {
    font-size: 3em;
  }
`;

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
