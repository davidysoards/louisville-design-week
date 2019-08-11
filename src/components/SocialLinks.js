import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function SocialLinks({ fontSize }) {
  return (
    <Wrapper>
      <IconContainer>
        <a
          href="https://www.instagram.com/aigalou/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={fontSize} title="follow on Instagram" />
        </a>
        <a
          href="https://www.facebook.com/aigalou/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={fontSize} title="follow on Facebook" />
        </a>
        <a
          href="https://twitter.com/aigalou/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={fontSize} title="follow on Twitter" />
        </a>
      </IconContainer>
    </Wrapper>
  );
}

SocialLinks.propTypes = {
  fontSize: PropTypes.string.isRequired,
};

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  /* padding: 10px 0;
  margin-bottom: 20px; */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
