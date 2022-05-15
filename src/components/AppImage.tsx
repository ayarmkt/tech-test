import React from 'react';
import appImage from '../assets/app.png';
import { StyledAppImage } from './styles/AppImage.styled';

const AppImage: React.FC = (): JSX.Element => {
  return <StyledAppImage src={appImage} alt='screen' />;
};

export default AppImage;
