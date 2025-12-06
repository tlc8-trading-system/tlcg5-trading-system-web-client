export type userRoles = "admin" | "trader";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: userRoles;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface Stock  {
    ticker: string;
    name: string;
    price: number;
    exchange: string
}
export interface Asset {
  symbol: string;
  name: string;
  price: number;
  exchange: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  accessToken: string; 
}

export type OrderType = "Buy" | "Sell";
export type OrderMode = "Market" | "Limit";
