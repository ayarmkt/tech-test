import { StyledSectionTitle } from './styles/SectionTitle.styled';

const SectionTitle = ({ sectionTitleText, color, width, textAlign }) => {
  return (
    <StyledSectionTitle color={color} width={width} textAlign={textAlign}>
      {sectionTitleText}
    </StyledSectionTitle>
  );
};

export default SectionTitle;
