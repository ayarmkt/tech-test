import { StyledContentLabel } from './styles/ContentLabel.styled';

const ContentLabel = ({ color, labelText }) => {
  return <StyledContentLabel color={color}>{labelText}</StyledContentLabel>;
};

export default ContentLabel;
