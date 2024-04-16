import { useAllRoutes } from 'api';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type VisibleGuardProps = {
  path: string;
  children: ReactNode;
};

export const VisibleGuard = ({ path, children }: VisibleGuardProps) => {
  const { isLoading, isError } = useAllRoutes({ path }, false);

  if (isLoading) return null;

  if (isError) return <Navigate to={'/404'} />;

  return children;
};
