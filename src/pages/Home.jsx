import React from 'react';

// import Loader from '../components/Loader/Loader';
// import Navigation from '../components/Navigation/Navigation';
import { NavLink } from 'react-router-dom';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Phonebook manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <div style={styles.container}>
        <NavLink to="contacts">contacts all</NavLink>
      </div>

      {/* <Navigation /> */}
    </div>
  );
};

export default Home;
