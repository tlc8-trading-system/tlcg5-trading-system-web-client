import type { RegisterRequest } from "../../../types";
import apiClient from "../../api-client";

export const registerUser = async (user: RegisterRequest) => {
  await apiClient.post("register-endpoint", user);
};
