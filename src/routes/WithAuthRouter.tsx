import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

interface WithAuthRouterProps {
  children: React.ReactNode;
  loggedNeeded?: boolean;
}

const WithAuthRouter = ({
  children,
  loggedNeeded = true,
}: WithAuthRouterProps) => {
  const { user } = useAuth();

  if (loggedNeeded && !user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default WithAuthRouter;
