import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "./auth-apis";
import { toast } from "sonner";
import type { NavigateFunction } from "react-router-dom";
import type { ApiResponse, LoginRequest, LoginResponse } from "../../../types";

export const RegisterUser = (navigate: NavigateFunction) => {
  const onSuccess = () => {
    toast("Registration successful, please log in");
    navigate("/dashboard");
  };
  
  return useMutation({
    mutationFn: registerUser,
    onSuccess,
    onError: () => toast("Registration failed, please try again"),
  });
};



export const LoginUser = (navigate: NavigateFunction) => {
  return useMutation<ApiResponse<LoginResponse>, Error, LoginRequest>({
    mutationFn: loginUser,

    onSuccess: (res) => {
      if (!res.data) {
        toast.error(res.message);
        return;
      }

      toast.success(`Welcome back, ${res.data.firstname}!`);
      navigate("/dashboard");
    },

    onError: (error) => {
      toast.error("Unable to reach server.");
      console.error(error);
    },
  });
};
