import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import SectionTitle from '../UI/SectionTitle';
import {
  StyledFeatureDetailsSection,
  StyledDetailsContainer,
  StyledArticle,
} from './styles/FeatureDetailsSection.styled';

const detailItems = [
  {
    label: 'Job Editor',
    text: 'Our easy-to-use editor allows you to create customized job ads within minutes.',
    span: 2,
    bgColor: 'white',
  },
  {
    label: 'Accept & Reject',
    text: 'Automate tasks and save time. With one click you can accept or reject candidates.',
    span: 3,
    bgColor: 'yellow',
  },
  {
    label: 'Team Collaboration and Communication',
    text: 'Exchange ideas and progress with team members to make the right decisions together.',
    span: 4,
    bgColor: 'green',
  },
  {
    label: 'Create Custom Tags',
    text: 'Tags help you organize and structure candidates more efficiently.',
    span: 4,
    bgColor: 'lightblue',
  },
  {
    label: 'Responsive',
    text: 'Flexible ads without being a techie.',
    span: 2,
    bgColor: 'purple',
  },
  {
    label: 'Boost Your Employer Branding',
    text: 'Stand out with your branded careers site - including your company’s own custom URL.',
    span: 2,
    bgColor: 'red',
  },
  {
    label: 'Notes',
    text: 'Collect your thoughts and share them with colleagues.',
    span: 2,
    bgColor: 'white',
  },
];

const FeatureDetailsSection = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <StyledFeatureDetailsSection>
      <div>
        <SectionTitle
          sectionTitleText='But wait. There is more'
          color={themeContext.colors.black}
        />
        <p>
          Leverage winning strategies to best promote jobs. Find the ideal
          candidate faster.
        </p>
      </div>
      <StyledDetailsContainer>
        {detailItems.map((item, index) => (
          <StyledArticle
            key={index}
            span={item.span}
            bgColor={themeContext.colors[`${item.bgColor}`]}
            color={
              item.bgColor === 'white'
                ? themeContext.colors.black
                : themeContext.colors.white
            }
          >
            <h3>{item.label}</h3>
            <p>{item.text}</p>
          </StyledArticle>
        ))}
      </StyledDetailsContainer>
    </StyledFeatureDetailsSection>
  );
};

export default FeatureDetailsSection;
