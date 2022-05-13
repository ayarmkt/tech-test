import {
  StyledReassuranceContainer,
  StyledReassuranceLogo,
  StyledReassuranceText,
} from './styles/Reassurance.styled';
import GitHub from '../assets/logos/github.png';
import Dropbox from '../assets/logos/dropbox.png';
import Spotify from '../assets/logos/spotify.png';
import Facebook from '../assets/logos/facebook.png';
import Apple from '../assets/logos/apple.png';
import Netflix from '../assets/logos/netflix.png';
import Google from '../assets/logos/google.png';

const companyLogos = [
  { name: 'Google', logoImg: Google },
  { name: 'Apple', logoImg: Apple },
  { name: 'Facebook', logoImg: Facebook },
  { name: 'Spotify', logoImg: Spotify },
  { name: 'Dropbox', logoImg: Dropbox },
  { name: 'GitHub', logoImg: GitHub },
  { name: 'Netflix', logoImg: Netflix },
];

const Reassurance = () => {
  return (
    <StyledReassuranceContainer>
      <p>Join thousands of teams hiring with Homerun</p>
      <div>
        {companyLogos.map((logo) => (
          <img src={logo.logoImg} alt={logo.name} />
        ))}
      </div>
    </StyledReassuranceContainer>
  );
};

export default Reassurance;
