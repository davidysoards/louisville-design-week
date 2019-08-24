import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

export default function SponsorsSection({ level }) {
  return (
    <SponsorsContainer>
      {level.map(sponsor => {
        const { name, url, width, image } = sponsor;
        return (
          <div
            style={{
              flexBasis: `${width}px`,
              margin: '0 auto',
            }}
            key={name}
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Sponsor src={image} alt={name} />
            </a>
          </div>
        );
      })}
    </SponsorsContainer>
  );
}

SponsorsSection.propTypes = {
  level: PropTypes.array.isRequired,
};

const SponsorsContainer = styled.div`
  margin: 0 auto 20px;
  @media screen and (min-width: 700px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
`;

const Sponsor = styled.img`
  padding: 20px;
`;
