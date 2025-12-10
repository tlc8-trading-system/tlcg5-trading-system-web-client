import type { User } from "../types";
import AuthContext from "../contexts/auth-context";
import { useCurrentUser } from "../api/features/user/user-queries"; 
import { useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "../api/features/authentication/auth-apis";

export function AuthProvider({ children }: { children: React.ReactNode }) {

  const { 
    data: user, 
    isLoading: isQueryLoading, 
    refetch, 
  } = useCurrentUser(); 
  
  const queryClient = useQueryClient();

  const isLoading = isQueryLoading;

  
  const login = async (user?: User): Promise<void> => {
    queryClient.setQueryData(["me"], user ?? null);
  };


  const logout = async () => {
    logoutUser();
  
  };

  return (
    <AuthContext.Provider
      value={{
        user: user || null, 
        login,
        logout,
        checkAuth: async () => {
          await refetch();
        },
        isAuthenticated: !!user,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}