import React from 'react';
import styled from '@emotion/styled';

export default function speakerFeatured({ imgSrc, imgAlt, name, bio }) {
  return (
    <Container>
      <img src={imgSrc} alt={imgAlt} />
      <div>
        <h2>{name}</h2>
        <div dangerouslySetInnerHTML={{ __html: bio }} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  grid-gap: 20px;
  margin: 20px 0;
  img {
    border-radius: 20px;
  }
  h2 {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;
