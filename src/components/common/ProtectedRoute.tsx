import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

export default function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const currentRole = useAppSelector((state) => state.auth.currentRole);

  if (!allowedRoles.includes(currentRole)) {
    return <Navigate to="/overview" replace />;
  }

  return <>{children}</>;
}
