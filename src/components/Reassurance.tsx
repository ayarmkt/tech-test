import React from 'react';
import { StyledReassuranceContainer } from './styles/Reassurance.styled';
import { companyLogos } from '../data/company-logos';

const Reassurance: React.FC = () => {
  return (
    <StyledReassuranceContainer>
      <p>Join thousands of teams hiring with Homerun</p>
      <div>
        {companyLogos.map((logo, index) => (
          <img key={index} src={logo.logoImg} alt={logo.name} />
        ))}
      </div>
    </StyledReassuranceContainer>
  );
};

export default Reassurance;
