import React from 'react';
// import { Link } from 'gatsby';
import styled from '@emotion/styled';

import heroImage from '../images/wide-2.jpg';

import Layout from '../components/layout';
import SEO from '../components/seo';

const StorefrontPage = () => (
  <Layout>
    <SEO title="Theme" />
    <Hero>
      <HeroContainer>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </HeroContainer>
    </Hero>
  </Layout>
);

export default StorefrontPage;

const Hero = styled.div`
  height: 100vh;
  background: url(${heroImage});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
`;
