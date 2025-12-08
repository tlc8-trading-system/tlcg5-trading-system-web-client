import { MOCK_SUCCESS_LOGIN_RESPONSE } from "../../../data/mock-data";
import type { LoginRequest, LoginResponse, RegisterRequest } from "../../../types";
import apiClient from "../../api-client";

export const registerUser = async (user: RegisterRequest) => {
  await apiClient.post("register-endpoint", user);
};

export const loginUser = async (credentials:LoginRequest): Promise<LoginResponse> => {
  // const response = await apiClient.post("login-endpoint", credentials);
  // return response.data;
  console.log("MOCK API: Login requested with credentials:", credentials);
  return MOCK_SUCCESS_LOGIN_RESPONSE;
}
