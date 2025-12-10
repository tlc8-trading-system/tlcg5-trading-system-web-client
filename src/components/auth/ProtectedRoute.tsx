import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Checking authentication...</p> 
      </div>
    );
  }

  if (!isAuthenticated) {

    return <Navigate to="/login" replace />;
  }
  

  return <Outlet />;
}