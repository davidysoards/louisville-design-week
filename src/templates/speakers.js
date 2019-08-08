import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Speaker from '../components/Speaker';

export default function SpeakersPage({ data }) {
  // console.log(data);
  const { speakers } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <SEO title="Speakers" />
      <PageTitle>Speakers</PageTitle>
      <SpeakerGrid>
        {speakers.map(speaker => (
          <Speaker
            imgSrc={speaker.image}
            imgAlt={speaker.alt}
            name={speaker.name}
            job={speaker.job}
            website={speaker.website}
            key={speaker.name}
          />
        ))}
      </SpeakerGrid>
    </Layout>
  );
}

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

const SpeakerGrid = styled.div`
  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

SpeakersPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query SpeakersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        speakers {
          image
          name
          alt
          job
          website
          socialLinks {
            twitter
            instagram
            facebook
          }
        }
      }
    }
  }
`;
