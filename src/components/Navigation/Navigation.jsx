import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../../redux/auth-selector';
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
export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};

// export default Navigation;
