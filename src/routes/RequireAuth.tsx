import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/useAuth';

interface Props {
  children: React.ReactElement;
}

export default function RequireAuth({ children }: Props) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}
