import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

const Header = ({ siteTitle, toggleTheme }) => {
  const Wrapper = styled.header`
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

export default Header;
