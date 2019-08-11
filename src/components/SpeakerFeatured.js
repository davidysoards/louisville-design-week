import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

export default function SpeakerFeatured({
  name,
  bio,
  website,
  imgSrc,
  imgAlt,
}) {
  return (
    <FeaturedContainer>
      <a href={website} target="_blank" rel="noopener noreferrer">
        <Photo src={imgSrc} alt={imgAlt} />
      </a>
      <div>
        <a href={website} target="_blank" rel="noopener noreferrer">
          <Name>{name}</Name>
        </a>
        <Bio dangerouslySetInnerHTML={{ __html: bio }} />
      </div>
    </FeaturedContainer>
  );
}

SpeakerFeatured.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

const FeaturedContainer = styled.div`
  grid-gap: 20px;
  margin: 20px 0;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

const Photo = styled.img`
  border-radius: 20px;
`;

const Name = styled.h2`
  &:hover {
    color: var(--color-secondary);
  }
`;

const Bio = styled.div`
  p {
    margin-bottom: 10px;
    line-height: 1.2;
  }
`;
