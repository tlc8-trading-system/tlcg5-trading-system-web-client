import type {
  LoginRequest,
  RegisterRequest,
} from "../../../types";
import apiClient from "../../api-client";
import { endpoints } from "../../api-endpoints";
import queryClient from "../../query-client";

export const registerUser = async (user: RegisterRequest) => {
  await apiClient.post(endpoints.authEndpoints.register, user);
};

export const loginUser = async (credentials: LoginRequest) => {
  const { data } = await apiClient.post(
    endpoints.authEndpoints.login,
    credentials
  );
  return data;
};

export const logoutUser = async (): Promise<void> => {
  await apiClient.post(endpoints.authEndpoints.logout);
  queryClient.setQueryData(["me"], null);
};
