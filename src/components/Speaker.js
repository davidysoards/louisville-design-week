import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

export default function Speaker({
  name,
  bio,
  job,
  website,
  imgSrc,
  imgAlt,
  keynote,
}) {
  return (
    <FeaturedContainer>
      <a href={website} target="_blank" rel="noopener noreferrer">
        <Photo src={imgSrc} alt={imgAlt} />
      </a>
      <div>
        <NameWrapper>
          <a href={website} target="_blank" rel="noopener noreferrer">
            <Name>{name}</Name>
          </a>
          {keynote && <Keynote>KEYNOTE SPEAKER</Keynote>}
        </NameWrapper>
        <Job>{job}</Job>
        <Bio dangerouslySetInnerHTML={{ __html: bio }} />
      </div>
    </FeaturedContainer>
  );
}

Speaker.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

const FeaturedContainer = styled.div`
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    display: flex;
    @supports (display: grid) {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: 1fr 2fr;
    }
  }
`;

const Photo = styled.img`
  border-radius: 20px;
  max-width: 500px;
  margin: 0 auto;
`;

const NameWrapper = styled.div`
  display: flex;
`;

const Name = styled.h2`
  &:hover {
    color: var(--color-secondary);
  }
`;

const Keynote = styled.p`
  /* line-height: 1.2; */
  font-weight: 700;
  margin-left: 0.5em;
`;

const Job = styled.h3`
  font-size: 1em;
`;

const Bio = styled.div`
  p {
    margin-bottom: 10px;
    line-height: 1.2;
    font-size: 0.9em;
  }
`;
