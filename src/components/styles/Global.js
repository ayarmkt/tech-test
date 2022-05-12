import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Manrope:wght@800&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.black}; 
    font: ${({ theme }) => theme.basic.font};
    background-color: ${({ theme }) => theme.colors.lightgray}
  }
`;

export default GlobalStyles;
