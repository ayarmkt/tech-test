import Button from '../UI/Button';
import { StyledHero } from './styles/Hero.styled';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledMouse } from './styles/Hero.styled';
import { StyledHeroTitle } from './styles/Hero.styled';

const Hero = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <StyledHero>
      <StyledMouse
        text='Lily'
        bgColor={themeContext.colors.lightblue}
        top='115px'
        left='195px'
      />
      <StyledMouse
        text='Alexandre'
        bgColor={themeContext.colors.yellow}
        top='50px'
        left='-300px'
      />
      <StyledMouse
        text='Bouba'
        bgColor={themeContext.colors.green}
        top='200px'
        left='-330px'
      />
      <StyledMouse
        text='Charlotte'
        bgColor={themeContext.colors.red}
        top='215px'
        left='270px'
      />
      <StyledHeroTitle>
        Where hiring
        <br />
        comes together.
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
  );
};

export default Hero;
