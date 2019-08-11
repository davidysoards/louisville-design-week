import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <PageTitle>NOT FOUND</PageTitle>
      <p>
        You just hit a route that doesn&#39;t exist...{' '}
        <span role="img" aria-label="loudly crying face">
          {' '}
          😭
        </span>
      </p>
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
