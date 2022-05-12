import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Button from '../UI/Button';
import SubTitle from '../UI/SubTitle';
import { StyledTrialSection } from './styles/TrialSection.styled';

const TrialSection = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <StyledTrialSection>
      <SubTitle text='Start your free Homerun trial today' />
      <ul>
        <li>Totally free for 15 days</li>
        <li>No credit card needed</li>
      </ul>
      <Button
        text='Get started — It’s free!'
        height='56px'
        padding='0 25px'
        bgColor={themeContext.colors.black}
      />
    </StyledTrialSection>
  );
};

export default TrialSection;
