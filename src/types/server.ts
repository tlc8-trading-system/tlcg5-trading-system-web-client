import type { OrderMode, OrderType } from ".";

export interface ServerResponse {
  message: string;
  data: object;
}

export interface PlaceOrderRequest {
  product: string;
  quantity: string;
  price?: string;
  side: "BUY" | "SELL";
  type: "MARKET" | "LIMIT";
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
