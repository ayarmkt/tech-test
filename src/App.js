import './App.css';
import appImage from './assets/app.png';
import { ThemeProvider } from 'styled-components';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Reassurance from './components/Reassurance';
import FeatureSection from './components/FeatureSection';
import GlobalStyles from './components/styles/Global';
import { sectionContent } from './data/section-content';
import TrialSection from './components/TrialSection';

const theme = {
  colors: {
    black: '#1b1b1a',
    purple: '#7348ff',
    gray: '#f2f1f0',
    lightgray: '#FBFAF9',
  },
  basic: {
    font: '400 20px Inter',
  },
  nav: {
    font: '500 16px Inter',
    //lineHeight: '24px',
  },
  title: {
    font: '800 64px Manrope',
    //lineHeight: '70px',
  },
  subTitle: {
    font: '800 40px Manrope',
  },
  button: {
    //font: '500 Inter',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className='container'>
        <NavBar />
        <Hero />
        <Reassurance />
        <img src={appImage} alt='screen' />
        {sectionContent.map((content, index) => (
          <FeatureSection
            key={index}
            index={index}
            label={content.label}
            title={content.title}
            text={content.text}
            color={content.color}
          />
        ))}

        <TrialSection />
        {/* FURTHER DETAILS */}
        {/* START TRIAL SECTION */}
      </div>
    </ThemeProvider>
  );
}

export default App;
