import React from 'react';
import { StyledContentLabel } from './styles/ContentLabel.styled';

export interface Props {
  color: string;
  labelText: string;
}

const ContentLabel: React.FC<Props> = ({ color, labelText }): JSX.Element => {
  return <StyledContentLabel color={color}>{labelText}</StyledContentLabel>;
};

export default ContentLabel;
