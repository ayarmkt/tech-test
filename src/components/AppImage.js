import appImage from '../assets/app.png';
import { StyledAppImage } from './styles/AppImage.styled';

const AppImage = () => {
  return <StyledAppImage src={appImage} alt='screen' />;
};

export default AppImage;
