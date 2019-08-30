import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Events from '../components/Events';
import Featured from '../components/Featured';
import HeroImage from '../components/HeroImage';

export default function HomePage({ data }) {
  // console.log(data);
  const { node } = data.allMarkdownRemark.edges[0];
  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <HeroImage />
        <div>
          <Heading>{node.frontmatter.headline}</Heading>
          <SubHeading>{node.frontmatter.subHeadline}</SubHeading>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      </Hero>
      <SectionHeading>Featured Speakers</SectionHeading>
      <Featured />
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
    line-height: 1.3;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1200px;
    display: flex;
    align-items: center;
    @supports (display: grid) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }
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
  @media screen and (min-width: 768px) {
    font-size: 2em;
  }
  @media screen and (min-width: 1024px) {
    font-size: 2.2em;
  }
`;
