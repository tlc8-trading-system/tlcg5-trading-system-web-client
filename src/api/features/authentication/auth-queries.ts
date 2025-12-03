import { useMutation } from "@tanstack/react-query";
import { registerUser } from "./auth-apis";
import { toast } from "sonner";

export const RegisterUser = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => toast("Registration successful, please log in"),
    onError: () => toast("Registration failed, please try again")
  });
};
