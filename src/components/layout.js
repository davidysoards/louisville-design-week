/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import 'normalize.css';
import './layout.css';

const lightTheme = {
  '--color-text': 'black',
  '--color-bg': 'white',
  '--color-primary': 'teal',
};
const darkTheme = {
  '--color-text': 'white',
  '--color-bg': 'black',
  '--color-primary': 'purple',
};

const Layout = ({ children }) => {
  const [currentMode, setCurrentMode] = useState('light');

  const toggleTheme = () => {
    const newMode = currentMode === 'light' ? 'dark' : 'light';
    setCurrentMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  useEffect(() => {
    if (localStorage.getItem('mode') === 'dark') setCurrentMode('dark');
  }, []);

  useEffect(() => {
    const theme = currentMode === 'light' ? lightTheme : darkTheme;
    Object.keys(theme).map(key => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
    });
  }, [currentMode]);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        toggleTheme={toggleTheme}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.org"> Gatsby</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
