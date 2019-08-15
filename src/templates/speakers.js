import React from 'react';
import PropTypes from 'prop-types';
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
      {speakers.map(speaker => (
        <Speaker
          name={speaker.name}
          keynote={speaker.keynote}
          imgSrc={speaker.image}
          imgAlt={speaker.alt}
          bio={speaker.bio}
          job={speaker.job}
          website={speaker.website}
          key={speaker.name}
        />
      ))}
    </Layout>
  );
}

const PageTitle = styled.h1`
  text-align: center;
  margin-top: 64px;
  margin-bottom: 30px;
  font-size: 2em;
  @media screen and (min-width: 700px) {
    font-size: 3em;
  }
  @media screen and (min-width: 1000px) {
    text-align: left;
    margin-top: 84px;
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
          name
          keynote
          image
          bio
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
