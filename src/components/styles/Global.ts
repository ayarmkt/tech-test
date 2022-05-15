import { createGlobalStyle } from 'styled-components';
import { ThemeType } from '../../App';

interface Props {
  theme: ThemeType;
}

const GlobalStyles = createGlobalStyle<Props>`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Manrope:wght@800&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font: ${({ theme }) => theme.fonts.textRegular};
    color: ${({ theme }) => theme.colors.black}; 
  }
`;

export default GlobalStyles;
