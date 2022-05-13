import CompanyLogo from '../assets/company-logo.png';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Button from '../UI/Button';
import { StyledNavBar, StyledLoginBtn } from './styles/NavBar.styled';
import { BsChevronDown } from 'react-icons/bs';

const NavBar = () => {
  const themeContext = useContext(ThemeContext);

  const iconStyle = {
    fill: `${themeContext.colors.black}`,
    verticalAlign: 'middle',
  };

  return (
    <StyledNavBar>
      <a href='#'>
        <img src={CompanyLogo} alt='company logo' />
      </a>
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
        <Button
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
