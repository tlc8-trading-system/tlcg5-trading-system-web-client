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

export type roles = "admin" | "trader";
export interface Stock  {
    ticker: string;
    name: string;
    price: number;
    exchange: string
}
