import type { LoginRequest, LoginResponse, RegisterRequest } from "../../../types";
import apiClient from "../../api-client";

export const registerUser = async (user: RegisterRequest) => {
  await apiClient.post("register-endpoint", user);
};

export const loginUser = async (credentials:LoginRequest): Promise<LoginResponse> => {
  const response = await apiClient.post("login-endpoint", credentials);
  return response.data;
}
