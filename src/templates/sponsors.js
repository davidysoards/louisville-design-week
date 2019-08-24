import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SponsorsSection from '../components/SponsorsSection';

export default function SponsorsPage({ data }) {
  // console.log(data);
  const { topLevel } = data.markdownRemark.frontmatter;
  const { midLevel } = data.markdownRemark.frontmatter;
  const { lowerLevel } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <SEO title="Sponsors" />
      <PageTitle>Sponsors</PageTitle>

      <SectionTitle>Top Level</SectionTitle>
      <SponsorsSection level={topLevel} />

      <SectionTitle>Paid Sponsors</SectionTitle>
      <SponsorsSection level={midLevel} />

      <SectionTitle>In-Kind Sponsors</SectionTitle>
      <SponsorsSection level={lowerLevel} />
    </Layout>
  );
}

SponsorsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

const PageTitle = styled.h1`
  text-align: center;
  margin-top: 64px;
  margin-bottom: 10px;
  font-size: 2em;
  @media screen and (min-width: 700px) {
    font-size: 3em;
  }
  @media screen and (min-width: 1000px) {
    text-align: left;
    margin-top: 84px;
  }
`;

const SectionTitle = styled.h2`
  padding: 20px;
  text-align: center;
`;

export const query = graphql`
  query SponsorsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        topLevel {
          name
          url
          width
          image
        }
        midLevel {
          name
          url
          width
          image
        }
        lowerLevel {
          name
          url
          width
          image
        }
      }
    }
  }
`;
