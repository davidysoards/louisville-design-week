import React from 'react';
import styled from '@emotion/styled';
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
            <SocialWrapper>
              <SocialLinks fontSize="2em" />
            </SocialWrapper>
            <FooterText>
              This site was designed & built by{' '}
              <a
                href="https://davidysoards.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                David Soards
              </a>{' '}
              with Gatsby, React & GraphQL. It is hosted on Netlify and you can
              view the source code on{' '}
              <a
                href="https://github.com/davidysoards/louisville-design-week"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </FooterText>
            <FooterText>
              © {new Date().getFullYear()} AIGA Louisville
            </FooterText>
          </Column2>
        </Columns>
      </Container>
    </FooterWrapper>
  );
}

const EmailTitle = styled.h3`
  margin-bottom: 20px;
  text-align: center;
`;

const SocialTitle = styled.h3`
  text-align: center;
`;

const SocialWrapper = styled.h3`
  margin: 20px 0;
`;

const FooterWrapper = styled.footer`
  background: rgba(255, 255, 255, 0.9);
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
    display: flex;
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

const FooterText = styled.p`
  font-size: 0.7em;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 0.9em;
  }
`;
