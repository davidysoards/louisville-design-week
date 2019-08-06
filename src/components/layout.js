/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import './layout.css';

import Header from './Header';
import Footer from './Footer';

const lightTheme = {
  '--color-text': '#994cc3',
  '--color-bg': '#f0f0f0',
  '--color-primary': '#EF5350',
  '--color-secondary': '#0c969b',
  '--color-header-bg': 'rgba(255, 255, 255, 0.9)',
};
const darkTheme = {
  '--color-text': '#82AAFF',
  '--color-bg': '#011627',
  '--color-primary': '#c792ea',
  '--color-secondary': '#7fdbca',
  '--color-header-bg': 'rgba(1, 10, 18, 0.9)',
};

export default function Layout({ children }) {
  const [currentMode, setCurrentMode] = useState('light');
  const [isChecked, setIsChecked] = useState(false);

  const toggleTheme = () => {
    const newMode = currentMode === 'light' ? 'dark' : 'light';
    setIsChecked(!isChecked);
    setCurrentMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  useEffect(() => {
    if (localStorage.getItem('mode') === 'dark') {
      setCurrentMode('dark');
      setIsChecked(true);
    }
  }, []);

  useEffect(() => {
    const theme = currentMode === 'light' ? lightTheme : darkTheme;
    Object.keys(theme).forEach(key => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
    });
  }, [currentMode]);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
        toggleTheme={toggleTheme}
        isChecked={isChecked}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
