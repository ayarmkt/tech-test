import { BsCursorFill } from 'react-icons/bs';
import { StyledMouseName } from './styles/Mouse.styled';

const Mouse = ({ text, bgColor, className }) => {
  return (
    <div className={className}>
      <BsCursorFill style={{ transform: 'scale(-1, 1)', fill: bgColor }} />
      <StyledMouseName bgColor={bgColor}>{text}</StyledMouseName>
    </div>
  );
};

export default Mouse;

//position: 'relative'
