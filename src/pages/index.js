import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Events from '../components/Events';
import SvgAlwaysOpen from '../components/SvgAlwaysOpen';
import SpeakerFeatured from '../components/SpeakerFeatured';

export default function HomePage({ data }) {
  const { node } = data.allMarkdownRemark.edges[0];
  const { featuredSpeakers } = data.allMarkdownRemark.edges[0].node.frontmatter;
  // console.log(data);
  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <SvgWrapper>
          <SvgAlwaysOpen width="100%" intensity={4} blur={20} />
        </SvgWrapper>
        <div>
          <Heading>{node.frontmatter.headline}</Heading>
          <SubHeading>{node.frontmatter.subheadline}</SubHeading>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      </Hero>
      <SectionHeading>Featured Speakers</SectionHeading>
      {featuredSpeakers.map(speaker => (
        <SpeakerFeatured
          name={speaker.name}
          bio={speaker.bio}
          website={speaker.website}
          imgSrc={speaker.image}
          imgAlt={speaker.alt}
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
          html
          frontmatter {
            headline
            subHeadline
            featuredSpeakers {
              name
              bio
              website
              image
              alt
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
