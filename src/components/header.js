import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';

import ToggleSwitch from './ToggleSwitch';
import SvgAigaLou from './SvgAigaLou';
import SvgMenuBars from './SvgMenuBars';
import SocialLinks from './SocialLinks';
import HeaderCTAButton from './HeaderCTAButton';

export default function Header({ menuLinks, toggleTheme, isChecked }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleScroll = e => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      // console.log('over 50');
      setHasScrolled(true);
    } else {
      // console.log('under 50');
      setHasScrolled(false);
    }
  };

  const handleMenuClick = () => {
    setIsExpanded(!isExpanded);
  };

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setMenuHeight(node.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  return (
    <HeaderNav>
      <div className={hasScrolled ? 'header headerScrolled' : 'header'}>
        <Container>
          <MenuButton onClick={handleMenuClick} aria-label="menu button">
            <SvgMenuBars className="hamburger" />
          </MenuButton>
          <Link to="/" aria-label="go to home page">
            <SvgAigaLou className="logo" />
          </Link>
          <MenuWrapper>
            <NavDesktop>
              <HeaderCTAButton />
              {menuLinks.map(link => (
                <Link
                  to={link.link}
                  activeStyle={{
                    borderBottom: '2px solid #ef5350',
                    borderBottom: '2px solid var(--color-primary)',
                  }}
                  key={link.name}
                >
                  {link.name}
                </Link>
              ))}
              <SocialLinks fontSize="1em" />
            </NavDesktop>
            <Label htmlFor="mode">
              <ToggleSwitch
                toggleTheme={toggleTheme}
                isChecked={isChecked}
                id="mode"
                ariaLabel="dark mode toggle"
              />
              <span className="message">
                Toggle Day
                <br />
                or Night!
              </span>
            </Label>
          </MenuWrapper>
        </Container>
        <NavMobile
          style={{ height: isExpanded ? menuHeight : 0 }}
          aria-expanded={isExpanded}
        >
          <NavMobileContainer ref={measuredRef}>
            <Row>
              <HeaderCTAButton />
            </Row>
            {menuLinks.map(link => (
              <Row key={link.name}>
                <Link
                  to={link.link}
                  activeStyle={{
                    borderBottom: '2px solid #ef5350',
                    borderBottom: '2px solid var(--color-primary)',
                  }}
                >
                  {link.name}
                </Link>
              </Row>
            ))}
            <Row>
              <SocialLinks fontSize="1em" />
            </Row>
          </NavMobileContainer>
        </NavMobile>
      </div>
    </HeaderNav>
  );
}

Header.propTypes = {
  menuLinks: PropTypes.array.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

const bpMed = '1040px';

const HeaderNav = styled.header`
  .header {
    background: rgba(255, 255, 255, 0.9);
    background: var(--color-header-bg);
    position: fixed;
    width: 100%;
    z-index: 99;
    padding: 0;
    transition: background 0.8s, color 0.3s, padding 0.3s ease-out;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
    @media screen and (min-width: ${bpMed}) {
      background: none;
      padding: 10px 0;
      box-shadow: none;
    }
    a {
      color: #ef5350;
      color: var(--color-primary);
      &:hover {
        color: #0c969b;
        color: var(--color-secondary);
        opacity: 1;
      }
    }
    .logo {
      fill: #ef5350;
      fill: var(--color-primary);
      transition: fill 0.5s;
      height: 32px;
      &:hover {
        fill: #0c969b;
        fill: var(--color-secondary);
      }
      @media screen and (min-width: ${bpMed}) {
        height: 40px;
      }
    }

    &.headerScrolled {
      @media screen and (min-width: ${bpMed}) {
        color: #994cc3;
        color: var(--color-text);
        background: rgba(255, 255, 255, 0.9);
        background: var(--color-header-bg);
        padding: 0;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
      }
    }
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  .hamburger {
    fill: #994cc3;
    fill: var(--color-text);
    transition: fill 0.5s;
    height: 40px;
  }
  @media screen and (min-width: ${bpMed}) {
    display: none;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  max-width: 1200px;
  z-index: 999;
`;

const MenuWrapper = styled.div`
  display: flex;
`;

const NavDesktop = styled.nav`
  display: none;
  @media screen and (min-width: ${bpMed}) {
    display: flex;
    align-items: center;
    a {
      margin-right: 2em;
    }
  }
`;

const NavMobile = styled.nav`
  background: rgba(255, 255, 255, 0.9);
  background: var(--color-header-bg);
  overflow: hidden;
  transition: height 0.3s ease-in;
  @media screen and (min-width: ${bpMed}) {
    display: none;
  }
`;
const NavMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  padding: 15px 10px;
  border-top: 2px solid #994cc3;
  border-top: 2px solid var(--color-text);
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  .message {
    display: none;
    @media screen and (min-width: ${bpMed}) {
      display: inline;
      font-size: 0.6em;
      margin-left: 10px;
    }
  }
`;
