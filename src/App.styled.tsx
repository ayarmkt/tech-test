import styled from 'styled-components';

export const StyledApp = styled.div`
  padding: 2% 5%;
  background-color: ${({ theme }) => theme.colors.lightgray};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
