import React from 'react';
import styled from '@emotion/styled';

export default function HeaderCTAButton() {
  return (
    <ATagWrapper href="#">
      <Button>Buy Passport</Button>
    </ATagWrapper>
  );
}

const ATagWrapper = styled.a`
  &:hover {
    opacity: 1;
  }
`;

const Button = styled.button`
  padding: 8px;
  border-radius: 4px;
  font-size: 0.9rem;
  letter-spacing: 1px;
  font-weight: 700;
  text-transform: uppercase;
  background: var(--color-secondary);
  border: none;
  color: var(--color-header-bg);
  cursor: pointer;
  transition: box-shadow 0.2s, color 0.3s, transform 0.1s ease-out;
  &:hover {
    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.6);
    transform: translate3d(0, -2px, 0);
    color: white;
  }
`;
