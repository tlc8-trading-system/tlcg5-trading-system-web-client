import { useMutation } from "@tanstack/react-query";
import { registerUser } from "./auth-apis";
import { toast } from "sonner";
import type { NavigateFunction } from "react-router-dom";

export const RegisterUser = (navigate: NavigateFunction) => {
  const onSuccess = () => {
    toast("Registration successful, please log in");
    navigate("/login");
  };
  
  return useMutation({
    mutationFn: registerUser,
    onSuccess,
    onError: () => toast("Registration failed, please try again"),
  });
};
