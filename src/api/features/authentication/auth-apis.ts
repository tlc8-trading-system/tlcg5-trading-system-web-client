import type {
  ApiResponse,
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
): Promise<ApiResponse<LoginResponse>> => {
  try {
    const response = await apiClient.post(endpoints.authEndpoints.login, credentials);
    return response.data;
  } catch (error: any) {
    const message =
      error.response?.data?.message ||
      "An unexpected error occurred";
      
    return {
    data: null,
    message,
  };
  }
};
