import { useEffect, useState } from "react";
import type { User } from "../types";
import AuthContext from "../contexts/auth-context";
import { mockUser } from "../data/mock-data";
import { toast } from "sonner";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const getNewAccessToken = () => {
    return "new-access-token"; // This is to query the backend for a new access token
  };

  const login = (email: string, password: string) => {
    console.log("loging in with email: ", email, " and password: ", password);
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
    sessionStorage.clear()
  };

  useEffect(() => {
    const fetchAlreadyLoggedInUser = () => {
      const browserUser = sessionStorage.getItem("user");
      let accessToken = sessionStorage.getItem("access-token");
      if (browserUser && accessToken) {
        setUser(JSON.parse(browserUser));
      } else {
        const newAccessToken = getNewAccessToken();
        if (!newAccessToken) {
          toast("You must log in again");
          logout();
        }
        accessToken = newAccessToken;
      }
    };

    fetchAlreadyLoggedInUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
