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
      console.log('over 50');
      setHasScrolled(true);
    } else {
      console.log('under 50');
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
          <MenuButton onClick={handleMenuClick}>
            <SvgMenuBars hamburger="hamburger" />
          </MenuButton>
          <Link to="/">
            <SvgAigaLou className="logo" />
          </Link>
          <MenuWrapper>
            <NavDesktop>
              <HeaderCTAButton />
              {menuLinks.map(link => (
                <Link
                  to={link.link}
                  activeStyle={{ color: 'var(--color-secondary)' }}
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
              <span className="message">Toggle Day or Night!</span>
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
                  activeStyle={{ color: 'var(--color-secondary)' }}
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
  siteTitle: PropTypes.string,
};

const bpMed = '1000px';

const HeaderNav = styled.header`
  .header {
    background: var(--color-header-bg);
    position: fixed;
    width: 100%;
    z-index: 99;
    padding: 0;
    transition: background 0.8s, color 0.5s, padding 0.3s ease-out;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
    @media screen and (min-width: ${bpMed}) {
      background: none;
      padding: 10px 0;
      box-shadow: none;
    }
    a {
      color: var(--color-primary);
    }
    .logo {
      fill: var(--color-primary);
      transition: fill 0.5s;
      height: 32px;
      @media screen and (min-width: ${bpMed}) {
        height: 40px;
      }
    }

    &.headerScrolled {
      @media screen and (min-width: ${bpMed}) {
        color: var(--color-text);
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
  border-top: 2px solid var(--color-text);
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  .message {
    display: none;
    @media screen and (min-width: ${bpMed}) {
      display: inline;
      font-size: 0.7em;
      margin-left: 10px;
    }
  }
`;
