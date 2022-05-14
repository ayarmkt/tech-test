import React from 'react';
import Button from '../UI/Button';
import { StyledHero } from './styles/Hero.styled';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledMouse } from './styles/Hero.styled';
import { StyledHeroTitle } from './styles/Hero.styled';

const Hero: React.FC = (): JSX.Element => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <StyledHero>
        <StyledHeroTitle>
          Where hiring
          <br />
          comes together.
          <StyledMouse
            text='Lily'
            bgColor={themeContext.colors.lightblue}
            topPos='-10px'
            leftPos='450px'
          />
          <StyledMouse
            text='Alexandre'
            bgColor={themeContext.colors.yellow}
            topPos='-40px'
            leftPos='-40px'
          />
          <StyledMouse
            text='Bouba'
            bgColor={themeContext.colors.green}
            topPos='135px'
            leftPos='-65px'
          />
          <StyledMouse
            text='Charlotte'
            bgColor={themeContext.colors.red}
            topPos='180px'
            leftPos='530px'
          />
        </StyledHeroTitle>
        <p>
          Everything you need to organise your hiring
          <br />
          and make a great impression.
        </p>
        <Button
          text='Get started — It’s free!'
          heightSetting='56px'
          padding='0 23px'
          bgColor={themeContext.colors.purple}
        />
      </StyledHero>
    </>
  );
};

export default Hero;
