//import classes from './Button.module.css';
import React from 'react';
import { StyledButton } from './styles/Button.styled';

export interface Props {
  text: string;
  bgColor: string;
  heightSetting: string;
  padding: string;
}

const Button: React.FC<Props> = ({ text, heightSetting, padding, bgColor }) => {
  return (
    <StyledButton
      heightSetting={heightSetting}
      padding={padding}
      bgColor={bgColor}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
