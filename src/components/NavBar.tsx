import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import CompanyLogo from '../assets/company-logo.png';
import {
  StyledNavBar,
  StyledLoginBtn,
  StyledHomeLink,
  StyledTrialBtn,
} from './styles/NavBar.styled';
import { BsChevronDown } from 'react-icons/bs';

const NavBar: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  const iconStyle = {
    fill: `${themeContext.colors.black}`,
    verticalAlign: 'middle',
  };

  return (
    <StyledNavBar>
      <StyledHomeLink>
        <img src={CompanyLogo} alt='company logo' />
      </StyledHomeLink>
      <ul>
        <li>
          Product <BsChevronDown style={iconStyle} />
        </li>
        <li>Pricing</li>
        <li>Customers</li>
        <li>
          Learn <BsChevronDown style={iconStyle} />
        </li>
      </ul>
      <div>
        <StyledLoginBtn>Log in</StyledLoginBtn>
        <StyledTrialBtn
          text='Start 14-day trial'
          height='40px'
          padding='0 16px'
          bgColor={themeContext.colors.purple}
        />
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
