import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
} from "../../../types";
import apiClient from "../../api-client";
import { endpoints } from "../../api-endpoints";

export const registerUser = async (user: RegisterRequest) => {
  await apiClient.post(endpoints.authEndpoints.register, user);
};

export const loginUser = async (
  credentials: LoginRequest
): Promise<LoginResponse> => {
  const response = await apiClient.post("login-endpoint", credentials);
  return response.data;
};
