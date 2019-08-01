import React from 'react';
import styled from '@emotion/styled';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <Wrapper>
      <IconContainer>
        <a
          href="https://www.instagram.com/aigalou/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size="2em" title="follow on Instagram" />
        </a>
        <a
          href="https://www.facebook.com/aigalou/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size="2em" title="follow on Facebook" />
        </a>
        <a
          href="https://twitter.com/aigalou/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size="2em" title="follow on Twitter" />
        </a>
      </IconContainer>
    </Wrapper>
  );
};

export default SocialLinks;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
