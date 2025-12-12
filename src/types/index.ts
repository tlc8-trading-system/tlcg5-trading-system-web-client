export type userRoles = "admin" | "trader";

export interface User {
  createdAt: string;
  id: string;
  image: null;
  firstname: string;
  lastname: string;
  email: string;
  role: userRoles;
  updatedAt: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

export interface Stock {
  ticker: string;
  name: string;
  price: number;
  exchange: string;
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
  userId: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
}

export type OrderType = "Buy" | "Sell";
export type OrderPosition = "Short" | "Long";
export type OrderMode = "Market" | "Limit";
export type OrderStatus = "Pending" | "Partial" | "Closed" | "Canceled";

export interface ActiveTrade {
  id: string;
  symbol: string;
  type: string;
  position: string;
  quantity: number;
  entryPrice: number;
  currentPrice: number;
  profitLoss: number;
  profitLossPercent: number;
  openDate: string;
}

export interface ModifyActiveTrade {
  id: string;
  symbol: string;
  stopLoss: string;
  takeProfit: string;
}

export interface PendingOrder {
  id: string;
  symbol: string;
  type: string;
  quantity: number;
  price?: number;
  status: string;
  timestamp: string;
}

export interface Portfolio {
  id: string;
  title: string;
  description: string;
  value: number;
  profitLoss: number;
  profitLossPercent: number;
  count: number;
}

export interface CreateNewPortfolio {
  title: string;
  description: string;
}
