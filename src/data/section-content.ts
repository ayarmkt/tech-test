import Feature1 from '../assets/feature/feature-1.png';
import Feature2 from '../assets/feature/feature-2.png';
import Feature3 from '../assets/feature/feature-3.png';

export const sectionContent: Array<{
  label: string;
  title: string;
  text: string;
  color: string;
  image: string;
}> = [
  {
    label: 'Organize',
    title: 'Organize your hiring',
    text: 'A hiring flow you can wrap your head around.',
    color: '#179690',
    image: Feature1,
  },
  {
    label: 'Collaborate',
    title: 'Collaborate with your team',
    text: 'It’s easy for your whole team to join in on hiring.',
    color: '#FF2E57',
    image: Feature2,
  },
  {
    label: 'Connect',
    title: 'Connect with candidates',
    text: 'Stand out and show candidates who you are.',
    color: '#33D1EA',
    image: Feature3,
  },
];
