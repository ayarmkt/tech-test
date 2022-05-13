import { StyledReassuranceContainer } from './styles/Reassurance.styled';
import { companyLogos } from '../data/company-logos';

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
