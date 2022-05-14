import Button from '../UI/Button';
import { StyledHero } from './styles/Hero.styled';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledMouse } from './styles/Hero.styled';
import { StyledHeroTitle } from './styles/Hero.styled';

const Hero = () => {
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
            top='-10px'
            left='450px'
          />
          <StyledMouse
            text='Alexandre'
            bgColor={themeContext.colors.yellow}
            top='-40px'
            left='-40px'
          />
          <StyledMouse
            text='Bouba'
            bgColor={themeContext.colors.green}
            top='135px'
            left='-65px'
          />
          <StyledMouse
            text='Charlotte'
            bgColor={themeContext.colors.red}
            top='180px'
            left='530px'
          />
        </StyledHeroTitle>
        <p>
          Everything you need to organise your hiring
          <br />
          and make a great impression.
        </p>
        <Button
          text='Get started — It’s free!'
          height='56px'
          padding='0 23px'
          bgColor={themeContext.colors.purple}
        />
      </StyledHero>
    </>
  );
};

export default Hero;
