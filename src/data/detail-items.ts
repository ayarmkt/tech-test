import Responsive from '../assets/featureDetails/responsive.png';
import JobEditor from '../assets/featureDetails/job-editor.png';
import CustomTag from '../assets/featureDetails/custom-tag.png';
import EmployerBranding from '../assets/featureDetails/employer-branding.png';
import Notes from '../assets/featureDetails/notes.png';
import AcceptReject from '../assets/featureDetails/accept-reject.png';
import TeamCollaboration from '../assets/featureDetails/team-collaboration.png';

export const detailItems: Array<{
  label: string;
  text: string;
  span: number;
  bgColor: string;
  image: string;
}> = [
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
    image: TeamCollaboration,
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
    image: Responsive,
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
