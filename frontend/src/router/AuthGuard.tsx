import { AuthContext } from 'app/AuthContextProvider';
import { ForbiddenPage } from 'pages/errors/ForbiddenPage';
import { ReactNode, useContext } from 'react';

export const AuthGuard = ({ children }: { children: ReactNode }) => {
  const { isAdmin } = useContext(AuthContext);

  if (!isAdmin) return <ForbiddenPage />;

  return children;
};
