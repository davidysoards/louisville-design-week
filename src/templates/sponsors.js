import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function SponsorsPage({ data }) {
  console.log(data);
  const { sponsors } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title="Sponsors" />
      <PageTitle>Sponsors</PageTitle>
      <SponsorsContainer>
        {sponsors.map(sponsor => {
          const { name, url, width, image } = sponsor;
          return (
            <a href={url}>
              <Sponsor
                src={image}
                alt={name}
                key={name}
                style={{
                  width: `${width}px`,
                }}
              />
            </a>
          );
        })}
      </SponsorsContainer>
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

const Sponsor = styled.img`
  padding: 20px;
`;

const SponsorsContainer = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 700px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const query = graphql`
  query SponsorsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        sponsors {
          name
          url
          width
          image
        }
      }
    }
  }
`;
