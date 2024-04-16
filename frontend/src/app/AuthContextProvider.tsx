import { useAuthQuery } from 'api';
import { ReactNode, createContext } from 'react';

export const AuthContext = createContext({ isAdmin: false });

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const { data: isAdmin, isLoading } = useAuthQuery();

  if (isLoading) return <></>;

  return (
    <AuthContext.Provider value={{ isAdmin: !!isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
