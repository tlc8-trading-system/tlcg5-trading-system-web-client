import type { User } from "../types";

export const mockUser: User = {
    email: "samuella@trading.com",
    id: "1",
    firstName: "Samuella",
    lastName: "Aglago",
    role: "trader"
}

import type { LoginResponse } from "../types";

export const MOCK_SUCCESS_LOGIN_RESPONSE: LoginResponse = {
  accessToken: "fake-jwt-token-12345", 
  user: {
    id: "1",
    email: "samuella@trading.com",
    firstName: "Samuella",
    lastName: "Aglago",
    role: "admin",
  },
};