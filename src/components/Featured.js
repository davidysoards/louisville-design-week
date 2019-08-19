import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
// import shuffle from '../utils/shuffle';
import FeaturedSpeaker from '../components/FeaturedSpeaker';

export default function Featured() {
  const data = useStaticQuery(graphql`
    query FeaturedQuery {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "speakers" } } }
      ) {
        edges {
          node {
            frontmatter {
              speakers {
                name
                keynote
                job
                website
                image
                alt
              }
            }
          }
        }
      }
    }
  `);
  const { speakers } = data.allMarkdownRemark.edges[0].node.frontmatter;
  // const shuffledSpeakers = shuffle(speakers);

  return (
    <SpeakerGrid>
      {speakers.map(speaker => (
        <FeaturedSpeaker
          name={speaker.name}
          keynote={speaker.keynote}
          job={speaker.job}
          website={speaker.website}
          imgSrc={speaker.image}
          imgAlt={speaker.alt}
          key={speaker.name}
        />
      ))}
    </SpeakerGrid>
  );
}

const SpeakerGrid = styled.div`
  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
