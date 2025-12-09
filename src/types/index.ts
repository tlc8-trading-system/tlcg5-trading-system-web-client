export type userRoles = "admin" | "trader";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: userRoles;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
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

export interface ApiResponse<T>{
  data:T|null;
  message: string;
}

export interface LoginResponse {
    userId : string;
    firstname: string;
    lastname: string;
    email: string;
    role: string;
}

export type OrderType = "Buy" | "Sell";
export type OrderPosition = "Short" | "Long";
export type OrderMode = "Market" | "Limit";
export type OrderStatus = "Pending" | "Partial" | "Closed" | "Canceled"

export interface Order {
  id: string;
  symbol: string;
  type: string;
  quantity: number;
  price?: number;
  status: string;
  timestamp: string;
}
