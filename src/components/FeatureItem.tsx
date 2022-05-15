import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ContentLabel from '../UI/ContentLabel';
import SectionTitle from '../UI/SectionTitle';
import {
  StyledFeatureItem,
  StyledTextSection,
} from './styles/FeatureItem.styled';

export interface Props {
  index: number;
  label: string;
  title: string;
  text: string;
  color: string;
  image: string;
}

const FeatureItem: React.FC<Props> = ({
  index,
  label,
  title,
  text,
  color,
  image,
}): JSX.Element => {
  const themeContext = useContext(ThemeContext);

  return (
    <StyledFeatureItem direction={index % 2 === 0 ? 'row' : 'row-reverse'}>
      <StyledTextSection>
        <ContentLabel labelText={label} color={color} />
        <SectionTitle
          sectionTitleText={title}
          color={themeContext.colors.black}
        />
        <p>{text}</p>
      </StyledTextSection>
      <img src={image} alt={label} />
    </StyledFeatureItem>
  );
};

export default FeatureItem;
