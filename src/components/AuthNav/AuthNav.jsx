import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  font-size: 24px;
  color: #991b95;

  &.active {
    color: white;
  }
  &:hover,
  &:focus {
    color: white;
  }
`;

export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </div>
  );
};
