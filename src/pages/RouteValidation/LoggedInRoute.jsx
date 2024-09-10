import { Navigate } from 'react-router-dom';

import { isAuthenticated } from '../../utils/utils';
import { LOGIN_PATH } from '../../utils/path';

export const LoggedInRoute = ({ children }) => {
  const isLoggedIn = isAuthenticated();

  if (!isLoggedIn) {
    return <Navigate to={`${LOGIN_PATH}`} />;
  }

  return children;
};
