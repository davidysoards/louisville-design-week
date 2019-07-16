import React, { createContext, } from 'react';
import styled from '@emotion/styled';

const ToggleContext = createContext();

const MyThemeProvider = ({ children }) => {

  const StylesWrapper = styled.div``;

  return (
    <ToggleContext.Provider value={}>
        <StylesWrapper>{children}</StylesWrapper>
    </ToggleContext.Provider>
  );
};

export default MyThemeProvider;

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
