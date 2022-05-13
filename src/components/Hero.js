import Button from '../UI/Button';
import { StyledHero } from './styles/Hero.styled';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Mouse from '../UI/Mouse';
import { StyledMouse } from './styles/Hero.styled';

const Hero = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <StyledHero>
      <StyledMouse
        text='Lily'
        bgColor={themeContext.colors.lightblue}
        top='13%'
        left='63%'
      />
      <StyledMouse
        text='Alexandre'
        bgColor={themeContext.colors.yellow}
        top='7%'
        left='26%'
      />
      <StyledMouse
        text='Bouba'
        bgColor={themeContext.colors.green}
        top='41%'
        left='24%'
      />
      <StyledMouse
        text='Charlotte'
        bgColor={themeContext.colors.red}
        top='50%'
        left='67%'
      />

      <h1>
        Where hiring
        <br />
        comes together.
      </h1>
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
