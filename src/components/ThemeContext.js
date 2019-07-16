import React, { createContext, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';

const ToggleContext = createContext();

const MyThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  useEffect(() => {
    if (localStorage.getItem('mode') === 'dark') setThemeMode('dark');
  }, []);

  const mode = themeMode === 'dark' ? darkMode : lightMode;

  const StylesWrapper = styled.div`
    background: ${mode.background};
    color: ${mode.color};
    h1 {
      color: ${mode.headingColor};
    }
    a {
      color: ${mode.linkColor};
    }
  `;

  if (!themeMode) return <div />;

  return (
    <ToggleContext.Provider value={[themeMode, setThemeMode]}>
      <ThemeProvider theme={{ mode }}>
        <StylesWrapper>{children}</StylesWrapper>
      </ThemeProvider>
    </ToggleContext.Provider>
  );
};

export { MyThemeProvider, ToggleContext };

// =COLORS
const white = '#FFFFFF';
const black = '#222222';
const orange = '#FFB86C';
const green = '#50FA7B';
const purple = '#C865B9';

// =THEMES
const lightMode = {
  background: white,
  color: black,
  headingColor: purple,
  linkColor: orange,
};

const darkMode = {
  background: black,
  color: white,
  headingColor: purple,
  linkColor: green,
};
