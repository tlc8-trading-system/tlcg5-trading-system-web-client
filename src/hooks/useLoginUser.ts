import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import type { NavigateFunction } from "react-router-dom";
import { loginUser } from "../api/features/authentication/auth-apis"; 
import { useAuth } from "../hooks/useAuth"; 
import type { LoginResponse } from "../types";

export const useLoginUser = (navigate: NavigateFunction) => {
  const { login } = useAuth();

  const onSuccess = (data: LoginResponse) => {
    login(data.user, data.accessToken);
    
    toast.success(`Welcome back, ${data.user.firstName}!`);
    navigate("/dashboard");
  };
  
  return useMutation({
    mutationFn: loginUser,
    onSuccess,
    onError: (error) => {
        console.error("Login failed:", error);
        toast.error("Sign in failed. Please check your credentials.");
    },
  });
};