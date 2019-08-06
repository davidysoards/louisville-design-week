import React from 'react';
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

const Container = styled.div`
  margin: 0 auto;
  padding: 10px;
  width: 220px;
  text-align: center;
  img {
    border-radius: 100%;
    margin: 0 auto 5px;
  }
`;

const Name = styled.h3``;
const Job = styled.p`
  font-size: 0.9em;
`;
