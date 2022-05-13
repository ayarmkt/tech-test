import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import SectionTitle from '../UI/SectionTitle';
import {
  StyledFeatureDetailsSection,
  StyledDetailsContainer,
  StyledArticle,
  StyledDetailsText,
} from './styles/FeatureDetailsSection.styled';
import JobEditor from '../assets/featureDetails/job-editor.png';
import CustomTag from '../assets/featureDetails/custom-tag.png';
import EmployerBranding from '../assets/featureDetails/employer-branding.png';
import Notes from '../assets/featureDetails/notes.png';
import AcceptReject from '../assets/featureDetails/accept-reject.png';

const detailItems = [
  {
    label: 'Job Editor',
    text: 'Our easy-to-use editor allows you to create customized job ads within minutes.',
    span: 3,
    bgColor: 'white',
    image: JobEditor,
  },
  {
    label: 'Accept & Reject',
    text: 'Automate tasks and save time. With one click you can accept or reject candidates.',
    span: 4,
    bgColor: 'yellow',
    image: AcceptReject,
  },
  {
    label: 'Team Collaboration and Communication',
    text: 'Exchange ideas and progress with team members to make the right decisions together.',
    span: 6,
    bgColor: 'green',
  },
  {
    label: 'Create Custom Tags',
    text: 'Tags help you organize and structure candidates more efficiently.',
    span: 6,
    bgColor: 'lightblue',
    image: CustomTag,
  },
  {
    label: 'Responsive',
    text: 'Flexible ads without being a techie.',
    span: 3,
    bgColor: 'purple',
  },
  {
    label: 'Notes',
    text: 'Collect your thoughts and share them with colleagues.',
    span: 3,
    bgColor: 'white',
    image: Notes,
  },
  {
    label: 'Boost Your Employer Branding',
    text: 'Stand out with your branded careers site - including your company’s own custom URL.',
    span: 3,
    bgColor: 'red',
    image: EmployerBranding,
  },
];

const FeatureDetailsSection = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <StyledFeatureDetailsSection>
      <StyledDetailsText>
        <SectionTitle
          sectionTitleText='But wait. There is more'
          color={themeContext.colors.black}
        />
        <p>
          Leverage winning strategies to best promote jobs.
          <br />
          Find the ideal candidate faster.
        </p>
      </StyledDetailsText>
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
            <img src={item.image} alt='editor'></img>
            <h3>{item.label}</h3>
            <p>{item.text}</p>
          </StyledArticle>
        ))}
      </StyledDetailsContainer>
    </StyledFeatureDetailsSection>
  );
};

export default FeatureDetailsSection;
