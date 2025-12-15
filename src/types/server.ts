import type { OrderMode, OrderType } from ".";

export interface ServerResponse<T> {
  message: string;
  data: T | null;
}

export interface PlaceOrderRequest {
  product: string;
  side: string;
  type: string;
  quantity: number;
  price: number;
  portfolioId: string;
}

export const getOrderSide = (orderType: OrderType) => {
  if (orderType == "Buy") {
    return "BUY";
  } else {
    return "SELL";
  }
};

export const getOrderType = (orderMode: OrderMode) => {
  if (orderMode == "Limit") {
    return "LIMIT";
  } else {
    return "MARKET";
  }
};

export interface ServerActiveTrade {
  id: string;
  product: string;
  side: string;
  type: string;
  quantity: number;
  price: number;
  status: string;
  exchangeId: string;
  clientId: string;
  portfolioId: string;
  createdAt: string;
  updatedAt: string;
  requested_quantity: number;
  requested_price: number;
  filledQuantity: number;
  filledPrice: number;
  requestedExchange: string;
}

export interface ServerAsset {
  BID_PRICE: number;
  SELL_LIMIT: number;
  TICKER: string;
  MAX_PRICE_SHIFT: number;
  LAST_TRADED_PRICE: number;
  BUY_LIMIT: number;
  ASK_PRICE: number;
}

export interface ServerTradeHistory {
  id : string,
  product: string,
  side: string,
  type: string,
  quantity: number,
  price: number,
  status: string,
  exchangeId: string,
  clientId: string,
  portfolioId: string,
  createdAt: string,
  updatedAt: string,
  requested_quantity: number,
  requested_price : number,
  filledQuantity: number,
  filledPrice: number,
  requestedExchange: string
}
