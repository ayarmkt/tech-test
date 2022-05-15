import React from 'react';
import { BsCursorFill } from 'react-icons/bs';
import { StyledMouseName } from './styles/Mouse.styled';

export interface Props {
  text: string;
  bgColor: string;
  className?: string;
}

const Mouse: React.FC<Props> = ({ text, bgColor, className }): JSX.Element => {
  return (
    <div className={className}>
      <BsCursorFill
        style={{
          transform: 'scale(-1, 1)',
          fill: bgColor,
          position: 'relative',
        }}
      />
      <StyledMouseName bgColor={bgColor}>{text}</StyledMouseName>
    </div>
  );
};

export default Mouse;
