import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

export default function Speaker({ imgSrc, imgAlt, name, job, website }) {
  return (
    <Container>
      <a href={website}>
        <img src={imgSrc} alt={imgAlt} />
        <div>
          <Name>{name}</Name>
          <Job>{job}</Job>
        </div>
      </a>
    </Container>
  );
}

Speaker.propTypes = {
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
  line-height: 1.2;
`;
