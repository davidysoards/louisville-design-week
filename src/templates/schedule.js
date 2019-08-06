import React from 'react';
// import { Link } from 'gatsby';
import styled from '@emotion/styled';

// import gailycurl from '../images/gail-anderson-headshot.jpg';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function SchedulePage() {
  return (
    <Layout>
      <SEO title="Speakers" />
      <Hero>
        <HeroContainer>
          <h1>Speakers</h1>
        </HeroContainer>
      </Hero>
      <ScheduleContainer></ScheduleContainer>
    </Layout>
  );
}

const Hero = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroContainer = styled.div`
  margin-top: 64px;
  padding: 10px;
  justify-content: flex-start;
  h1 {
    font-size: 2em;
    @media screen and (min-width: 1024px) {
      font-size: 3em;
    }
  }
`;

const ScheduleContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
`;
