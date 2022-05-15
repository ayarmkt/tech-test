import React from 'react';
import { StyledButton } from './styles/Button.styled';

export interface Props {
  text: string;
  bgColor: string;
  height: string;
  padding: string;
}

const Button: React.FC<Props> = ({ text, height, padding, bgColor }) => {
  return (
    <StyledButton height={height} padding={padding} bgColor={bgColor}>
      {text}
    </StyledButton>
  );
};

export default Button;
