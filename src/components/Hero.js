import Button from '../UI/Button';
import { StyledHero } from './styles/Hero.styled';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const Hero = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <StyledHero>
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
