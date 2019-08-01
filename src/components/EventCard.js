import React from 'react';
import { format } from 'date-fns';
import styled from '@emotion/styled';

const EventCard = ({ name, summary, logo, start, end, venue }) => {
  const dayOfWeek = format(start, 'ddd').toUpperCase();
  const time = format(start, 'h:mm');
  const startTime = format(start, 'h:mm A');
  const endTime = format(end, 'h:mm A');
  const monthDay = format(start, 'MMM D');

  return (
    <Card>
      <img src={logo} alt="" />
      <Wrapper>
        <Text>
          <Column1>
            <Day>{dayOfWeek}</Day>
            <Time>{time}</Time>
          </Column1>
          <div>
            <Name>{name}</Name>
            <Venue>{venue}</Venue>
            <StartToEnd>
              {monthDay} • {startTime} - {endTime}
            </StartToEnd>
          </div>
        </Text>
        <Button>Buy Tickets</Button>
      </Wrapper>
    </Card>
  );
};

export default EventCard;

const Card = styled.div`
  background: white;
  max-width: 400px;
  color: #222;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.3);
`;

const Wrapper = styled.div`
  padding: 10px;
  display: grid;
  align-items: center;
`;

const Text = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 10px;
`;

const Column1 = styled.div`
  align-self: center;
  text-align: center;
`;

const Day = styled.div`
  font-size: 2em;
  margin-bottom: 5px;
  font-weight: 300;
`;
const Time = styled.div`
  font-size: 1.4em;
  font-weight: 700;
  color: #999999;
`;

const Name = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`;
const Venue = styled.div`
  margin-bottom: 5px;
`;
const StartToEnd = styled.div`
  font-size: 0.8em;
`;
const Button = styled.button`
  /* background: #0c969b; */
  margin-top: 10px;
  transition: box-shadow 0.3s, transform 0.3s ease-out;
  &:hover {
    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.6);
    transform: translate3d(0, -2px, 0);
  }
`;
