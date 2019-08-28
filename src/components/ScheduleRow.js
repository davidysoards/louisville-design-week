import React from 'react';
import PropTypes from 'prop-types';
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
  sponsor,
  sponsorAlt,
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
        <SponsorLogo>
          <img src={sponsor} alt={sponsorAlt} />
        </SponsorLogo>
      </div>
      <Avatar>
        <img src={imgSrc} alt={imgAlt} />
      </Avatar>
      <Description>{description}</Description>
    </EventRow>
  );
}

ScheduleRow.propTypes = {
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  location: PropTypes.string,
  googleMapUrl: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  sponsor: PropTypes.string,
  sponsorAlt: PropTypes.string,
};

const EventRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @supports (display: grid) {
    display: grid;
    grid-template-columns: 1.5fr 3fr 1fr;
    grid-gap: 10px;
  }
  padding-bottom: 15px;
  margin: 15px 0;
  border-bottom: 2px solid #994cc3;
  border-bottom: 2px solid var(--color-text);
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Time = styled.p`
  line-height: 1.2;
  font-weight: 700;
  color: #ef5350;
  color: var(--color-primary);
  span {
    color: #994cc3;
    color: var(--color-text);
    font-size: 0.7em;
    opacity: 0.6;
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
  margin: 0;
  @supports (display: grid) {
    grid-column: 1 / 4;
  }
  @media screen and (min-width: 768px) {
    font-size: 0.9em;
  }
`;

const Avatar = styled.div`
  justify-self: end;
  img {
    border-radius: 100%;
    width: 60px;
  }
`;

const SponsorLogo = styled.div`
  margin-top: 15px;
  img {
    width: 120px;
  }
`;
