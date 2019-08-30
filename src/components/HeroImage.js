import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import SvgAlwaysOpen from './SvgAlwaysOpen';
import { ModeContext } from './layout';

export default function HeroImage() {
  const mode = useContext(ModeContext);
  return (
    <SvgWrapper className={mode === 'dark' ? 'flickering' : ''}>
      <SvgAlwaysOpen width="100%" intensity={4} blur={20} />
    </SvgWrapper>
  );
}

const flicker = keyframes`
  from  { opacity: 0; }
  0%    { opacity: 1; }
  2%    { opacity: 0.8; }
  4%    { opacity: 1; }
  7%    { opacity: 0.6; }
  8%    { opacity: 1; }
  to    { opacity: 1; }
`;

const SvgWrapper = styled.div`
  max-width: 540px;
  width: 100%;
  margin: 20px auto;
  @media screen and (min-width: 1024px) {
    margin: 40px auto;
    flex-shrink: 0;
  }
  &.flickering {
    animation: ${flicker} 10s linear 5s infinite;
  }
`;
