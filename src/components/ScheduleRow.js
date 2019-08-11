import React from 'react';
import styled from '@emotion/styled';

export default function ScheduleRow({
  startTime,
  endTime,
  title,
  description,
  location,
  googleMapUrl,
  imgSrc,
  imgAlt,
}) {
  return (
    <EventRow>
      <Column1>
        <Time>
          <time>{startTime}</time>
          <br />
          <span>to</span>
          <br />
          <time>{endTime}</time>
        </Time>
      </Column1>
      <div>
        <Title>{title}</Title>
        <Location href={googleMapUrl} target="_blank" rel="noopener noreferrer">
          {location}
        </Location>
        <Description>{description}</Description>
      </div>
      <Avatar>
        <img src={imgSrc} alt={imgAlt} />
      </Avatar>
    </EventRow>
  );
}

const EventRow = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3fr 1fr;
  grid-gap: 10px;
  padding-bottom: 15px;
  margin: 15px 0;
  border-bottom: 2px solid var(--color-text);
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Time = styled.p`
  line-height: 1.2;
  span {
    font-size: 0.7em;
  }
`;

const Title = styled.h3`
  line-height: 1;
  font-size: 1.2em;
  margin-bottom: 5px;
`;

const Location = styled.a`
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 0.8em;
  margin-bottom: 0;
`;

const Avatar = styled.div`
  justify-self: end;
  img {
    border-radius: 100%;
    width: 60px;
  }
`;
