export const mockActiveTrades = [
  {
    id: "TRD-001",
    product: "TSLA",
    type: "Long",
    side: "Buy",
    quantity: 50,
    price: 252.3,
    status: "open",
  },
  {
    id: "TRD-002",
    product: "NVDA",
    type: "Long",
    side: "Buy",
    quantity: 100,
    price: 498.2,
    status: "open",
  },
  {
    id: "TRD-003",
    product: "AMZN",
    type: "LIMIT",
    side: "Sell",
    quantity: 30,
    price: 151.2,
    status: "open",
  },
];

export interface ServerActiveTrade {
  id: string;
  product: string;
  side: string;
  type: string;
  quantity: number;
  price: number;
  status: string;
}

export const mockPendingOrders = [
  {
    id: "ORD-001",
    symbol: "AAPL",
    type: "Buy",
    quantity: 100,
    price: 178.5,
    status: "Pending",
    timestamp: "2025-12-01T10:15:00",
  },
  {
    id: "ORD-002",
    symbol: "GOOGL",
    type: "Sell",
    quantity: 50,
    status: "Pending",
    timestamp: "2025-12-01T09:45:00",
  },
  {
    id: "ORD-003",
    symbol: "MSFT",
    type: "Buy",
    quantity: 75,
    price: 378.25,
    status: "Partial",
    timestamp: "2025-12-01T09:30:00",
  },
];
