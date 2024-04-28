import { useAuth } from '@/store/AuthStore/auth/store';
import { FunctionComponent, ReactNode, useEffect } from 'react';

interface AuthProviderProps {
  isPrivate?: boolean;
  verifyUser?: boolean;
  children: ReactNode;
}

const AuthProvider: FunctionComponent<AuthProviderProps> = ({
  children,
  isPrivate = false,
  verifyUser = false,
}) => {
  const { loginAction } = useAuth();

  useEffect(() => {
    if (verifyUser) {
      loginAction();
    }
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
