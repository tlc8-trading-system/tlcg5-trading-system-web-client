export type userRoles = "ADMIN" | "USER";

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
export type OrderStatus =
  | "PENDING"
  | "SENT"
  | "PARTIALLY_FILLED"
  | "FILLED"
  | "CANCELLED"
  | "REJECTED";

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
  type: string;
  quantity: number;
  price?: number;
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

export interface Holdings{
    id: string,
    asset: string,
    quantity: number,
    currentPrice: number,
    profitLoss: number,
    profitLossPercent: number,
    averagePrice: number
}

export interface PortfolioDetails {
  portfolio: Portfolio;
  holdings: Holdings[];
}
 
export interface Portfolio {
  id: string;
  title: string;
  description: string;
  value: number;
  profitLoss: number;
  profitLossPercent: number;
  count: number;
  createdAt: string;
}
 export interface CreateNewPortfolio {
  title: string;
  description: string;
}

export interface Exchange {
  id: string;
  name: string;
  baseUrl: string;
  enabled: boolean;
}
export interface Client {
  userId: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  totalValue: number;
  profitLoss: number;
  profitLossPercentage: string;
  portfolioCount: number;
  balance: number;
  activeTradesCount: number;
  createdAt: string;
  deletedAt: string | null;
}

export interface ClientDetail {
  email: string;
  firstname: string;
  id: string;
  image?: string;
  lastname: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}
