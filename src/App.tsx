import React from 'react';
import { StyledApp } from './App.styled';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Reassurance from './components/Reassurance';
import AppImage from './components/AppImage';
import FeatureSection from './components/FeatureSection';
import PushTrialSection from './components/PushTrialSection';
import FeatureDetailsSection from './components/FeatureDetailsSection';

const theme = {
  colors: {
    black: '#1b1b1a',
    purple: '#7348ff',
    gray: '#f2f1f0',
    lightgray: '#FBFAF9',
    yellow: '#FFB423',
    green: '#179690',
    lightblue: '#33D1EA',
    red: '#FF2E57',
    white: '#FFFFFF',
  },
  fonts: {
    textRegular: '400 20px Inter',
    textSmall: '400 16px Inter',
    button: '500 18px Inter',
    nav: '500 16px Inter',
    mainTitle: '800 64px Manrope',
    sectionTitle: '800 40px Manrope',
    contentTitle: '800 20px Manrope',
    contentLabel: '800 16px Manrope',
  },
};

type ThemeType = typeof theme;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledApp>
        <NavBar />
        <Hero />
        <Reassurance />
        <AppImage />
        <FeatureSection />
        <PushTrialSection
          bgColor={theme.colors.purple}
          color={theme.colors.white}
          flexDirection='row'
          btnColor={theme.colors.black}
          showAdditionalText={false}
          showBGText={true}
          showInfoAtTheEnd={false}
        />
        <FeatureDetailsSection />
        <PushTrialSection
          flexDirection='column'
          textAlignSetting='center'
          btnColor={theme.colors.purple}
          showAdditionalText={true}
          showBGText={false}
          showInfoAtTheEnd={true}
        />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
export { ThemeType };
