import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "./auth-apis";
import { toast } from "sonner";
import type { NavigateFunction } from "react-router-dom";
import type { LoginRequest, LoginResponse } from "../../../types";
import queryClient from "../../query-client";
import type { ServerResponse } from "../../../types/server";

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
  return useMutation<ServerResponse<LoginResponse>, Error, LoginRequest>({
    mutationFn: loginUser,
    onSuccess: async (res) => {
      toast.success(`Welcome back, ${res.data?.firstname}!`);
      navigate("/dashboard");
      await queryClient.invalidateQueries({ queryKey: ["me"] });
    },

    onError: (error) => {
      toast.error("Login failed");
      console.error(error);
    },
  });
};
