import React from 'react';
import styled from '@emotion/styled';

// import PropTypes from 'prop-types';

// import SvgAlwaysOpen from './SvgAlwaysOpen';
import EmailSignupForm from './EmailSignupForm';

import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Columns>
          <Column1>
            <EmailTitle>Get informed about upcoming events</EmailTitle>
            <EmailSignupForm />
          </Column1>
          <Column2>
            <SocialTitle>Follow AIGALou On Social</SocialTitle>
            <SocialLinks fontSize="2em" />
            <p>
              This site was built by David Soards with React and Gatsby. It is
              hosted on Netlify and you can view the source code on GitHub.
            </p>
            <p>© {new Date().getFullYear()} AIGA Louisville</p>
          </Column2>
        </Columns>
      </Container>
    </FooterWrapper>
  );
}

// Footer.propTypes = {};

const EmailTitle = styled.h3`
  margin-bottom: 20px;
  text-align: center;
`;

const SocialTitle = styled.h3`
  text-align: center;
`;

const FooterWrapper = styled.div`
  background: var(--color-header-bg);
  margin-top: 30px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 10px;
`;

const Columns = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
    margin-bottom: 20px;
  }
`;
