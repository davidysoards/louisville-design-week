import React from 'react';
import styled from '@emotion/styled';

export default function ToggleSwitch({
  toggleTheme,
  isChecked,
  ariaLabel,
  id,
}) {
  return (
    <Toggle>
      <Input
        type="checkbox"
        onChange={toggleTheme}
        checked={isChecked}
        id={id}
        aria-label={ariaLabel}
      />
      <Slider></Slider>
    </Toggle>
  );
}

const Toggle = styled.div`
  position: relative;
  &:after {
    content: '☀️';
    font-size: 18px;
    position: absolute;
    top: 7px;
    left: 37px;
  }
  &:before {
    content: '🌙';
    font-size: 18px;
    position: absolute;
    top: 7px;
    left: 6px;
    z-index: 1;
  }
`;
const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
  &:hover + span:after {
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.2);
  }
  &:checked + span {
    background: #4a5b90;
    &:after {
      transform: translate3d(32px, 0, 0);
    }
  }
`;
const Slider = styled.span`
  position: relative;
  display: block;
  height: 32px;
  width: 64px;
  border-radius: 32px;
  transition: 0.25s ease-in-out;
  background: #3a9df8;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.15);
  &:after {
    content: '';
    position: absolute;
    border-radius: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: 0.25s ease-in-out;
    width: 32px;
    height: 32px;
  }
`;
