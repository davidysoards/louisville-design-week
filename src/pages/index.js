import React from 'react';
// import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Events from '../components/Events';
import SvgAlwaysOpen from '../components/SvgAlwaysOpen';
import SpeakerFeatured from '../components/SpeakerFeatured';

export default function HomePage({ data }) {
  const { featuredSpeakers } = data.allMarkdownRemark.edges[0].node.frontmatter;
  console.log(featuredSpeakers);
  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <SvgWrapper>
          <SvgAlwaysOpen width="100%" />
        </SvgWrapper>
        <div>
          <Heading>Louisville Design Week</Heading>
          <SubHeading>September 9th - 14th, 2019</SubHeading>
          <p>
            Design is, at it’s best, the convergence of a universal source of
            creativity. It doesn’t depend on any of the barriers or segregations
            that humans both consciously and subconsciously impose upon
            themselves. It requires that we be open and accepting. The
            convergence is something not only aesthetically beautiful, but also
            accessible to the greatest extent possible by everyone regardless of
            age, race, gender, ability or status.
          </p>
          <p>
            This is design that belongs to everyone. Design that unites us. It
            is ALWAYS OPEN.
          </p>
        </div>
      </Hero>
      <SectionHeading>Featured Speakers</SectionHeading>
      {featuredSpeakers.map(speaker => (
        <SpeakerFeatured
          imgSrc={speaker.image}
          imgAlt={speaker.alt}
          name={speaker.name}
          bio={speaker.bio}
          key={speaker.name}
        />
      ))}
      <SectionHeading>Upcoming Events</SectionHeading>
      <Events />
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "home" } } }
    ) {
      edges {
        node {
          frontmatter {
            featuredSpeakers {
              image
              name
              alt
              bio
            }
          }
        }
      }
    }
  }
`;

const Hero = styled.div`
  max-width: 720px;
  margin: 80px auto 20px;
  p {
    line-height: 1.4;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    align-items: center;
  }
`;

const SvgWrapper = styled.div`
  max-width: 540px;
  width: 100%;
  margin: 20px auto;
  @media screen and (min-width: 1024px) {
    margin: 40px auto;
  }
`;

const Heading = styled.h1`
  font-size: 2.6em;
`;

const SubHeading = styled.h2`
  font-size: 1.8em;
  margin-bottom: 0.2em;
`;

const SectionHeading = styled.h2`
  font-size: 1.6em;
  text-transform: uppercase;
  margin: 40px 0 10px;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 2em;
  }
  @media screen and (min-width: 1024px) {
    font-size: 2.2em;
  }
`;
