import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { ToggleContext } from './ThemeContext';

const Header = ({ siteTitle, theme }) => {
  const [themeMode, setThemeMode] = useContext(ToggleContext);

  const toggleTheme = () => {
    const mode = themeMode === 'dark' ? 'light' : 'dark';
    setThemeMode(mode);
    localStorage.setItem('mode', mode);
  };

  const Wrapper = styled.header`
    background: ${theme.mode.background};
    margin-bottom: 2rem;
  `;
  const Container = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  `;

  return (
    <Wrapper>
      <Container>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <button onClick={toggleTheme}>Toggle</button>
      </Container>
    </Wrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default withTheme(Header);
