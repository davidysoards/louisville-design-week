import React from 'react';
// import { Link } from 'gatsby';
import styled from '@emotion/styled';
// import heroImage from '../images/wide-1.jpg';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Events from '../components/Events';
import SvgAlwaysOpen from '../components/SvgAlwaysOpen';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <HeroContainer>
        <SvgWrapper>
          <SvgAlwaysOpen width="100%" />
        </SvgWrapper>
        <p>
          Design is, at it’s best, the convergence of a universal source of
          creativity. It doesn’t depend on any of the barriers or segregations
          that humans both consciously and subconsciously impose upon
          themselves. It requires that we be open and accepting. The convergence
          is something not only aesthetically beautiful, but also accessible to
          the greatest extent possible by everyone regardless of age, race,
          gender, ability or status.
        </p>
        <p>
          This is design that belongs to everyone. Design that unites us. It is
          <strong> ALWAYS OPEN.</strong>
        </p>
        <Heading>Welcome to Design Week 2019!</Heading>
        <p>We have some truly amazing events planned for you this year.</p>
      </HeroContainer>
    </Hero>
    <Events />
  </Layout>
);

export default IndexPage;

const Hero = styled.div`
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    line-height: 1.4;
  }
`;

const HeroContainer = styled.div`
  max-width: 720px;
  padding: 10px;
  margin-top: 80px;
`;

const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 540px;
  margin: 0 auto 20px;
`;

const Heading = styled.h1`
  margin-bottom: 0.2em;
`;
