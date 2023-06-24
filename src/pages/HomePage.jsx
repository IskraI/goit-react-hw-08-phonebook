import React from 'react';
import styled from 'styled-components';

// import Loader from '../components/Loader/Loader';
// import Navigation from '../components/Navigation/Navigation';
import { NavLink } from 'react-router-dom';

// import { selectIsLoading } from 'redux/contact-selector';
// import { selectIsLoading } from 'redux/auth-selector';
// import { Loader } from '../components/Loader/Loader';
// import { useSelector } from 'react-redux';
const styles = {
  container: {
    minHeight: 'calc(100vh)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'top',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: '#6c0068',
  },
};
const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  font-size: 24px;
  color: #991b95;
  text-transform: uppercase;
  &.active {
    color: white;
  }
  &:hover,
  &:focus {
    color: white;
  }
`;

const Home = () => {
  // const isLoading = useSelector(selectIsLoading);
  // const isLoadingAuth = useSelector(selectIsLoading);
  return (
    <div>
      {/* {isLoading && <Loader />} */}
      {/* {isLoadingAuth && <Loader />} */}
      <h1 style={styles.title}>
        Phonebook manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <div style={styles.container}>
        <StyledLink to="/contacts">contacts</StyledLink>
      </div>
    </div>
  );
};

export default Home;
