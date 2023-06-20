import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';

export const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      <UserMenu />
    </header>
  );
};
