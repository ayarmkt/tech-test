//import classes from './Button.module.css';
import { StyledButton } from './styles/Button.styled';

const Button = ({ text, height, padding, bgColor }) => {
  return (
    <StyledButton height={height} padding={padding} bgColor={bgColor}>
      {text}
    </StyledButton>
  );
};

export default Button;
