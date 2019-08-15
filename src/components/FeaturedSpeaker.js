import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

export default function FeaturedSpeaker({
  imgSrc,
  imgAlt,
  name,
  keynote,
  job,
  website,
}) {
  return (
    <Container>
      <a href={website} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={imgAlt} />
        <div>
          <Name>{name}</Name>
          <Job>{job}</Job>
          {keynote && <Keynote>KEYNOTE SPEAKER</Keynote>}
        </div>
      </a>
    </Container>
  );
}

FeaturedSpeaker.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

const Container = styled.div`
  margin: 0 auto;
  padding: 10px;
  width: 270px;
  text-align: center;
  img {
    border-radius: 100%;
    margin: 0 auto 5px;
  }
`;

const Name = styled.h3`
  font-size: 1.25em;
`;

const Job = styled.p`
  font-size: 0.9em;
  line-height: 1.1;
`;

const Keynote = styled.p`
  line-height: 1.1;
  font-weight: 700;
`;
