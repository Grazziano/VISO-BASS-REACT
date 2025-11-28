import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/useAuth';

interface Props {
  children: React.ReactElement;
}

export default function GuestOnly({ children }: Props) {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;
  return children;
}
