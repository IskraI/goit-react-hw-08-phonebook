import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Container } from './Layout.styled';

import { AppBar } from '../AppBar/AppBar';

const Layout = () => {
  return (
    <main>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};
export default Layout;
