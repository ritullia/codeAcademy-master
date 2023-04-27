import styled from "styled-components";

export const StyledNavBar = styled.nav`
  background-color: ${({ isDark }) => (isDark ? "black" : "white")};
`;
export const StyledNavBarUl = styled.ul`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  margin: 50px;
  margin-left: 30px;
  list-style: none;
  text-decoration: none;
  gap: 20px;
`;
