import type { Portfolio } from "../types";

export const mockPortfolios: Portfolio[] = [
  {
    id: "1",
    title: "Growth Portfolio",
    description: "Long-term growth focused on tech stocks",
    value: 125430.5,
    profitLoss: 8234.25,
    profitLossPercent: 7.02,
    count: 3,
  },
  {
    id: "2",
    title: "Conservative Portfolio",
    description: "Low-risk dividend stocks",
    value: 87650.0,
    profitLoss: -1234.5,
    profitLossPercent: -1.39,
    count: 2,
  },
  {
    id: "3",
    title: "Tech Focus",
    description: "High-growth tech companies",
    value: 45200.75,
    profitLoss: 3450.25,
    profitLossPercent: 8.27,
    count: 2,
  },
  {
    id: "4",
    title: "Income Fund",
    description: "Stable income through bonds and dividend stocks",
    value: 69320.4,
    profitLoss: 1420.1,
    profitLossPercent: 2.09,
    count: 3,
  },
  {
    id: "5",
    title: "Aggressive Growth",
    description: "High-risk emerging tech and biotech companies",
    value: 38210.8,
    profitLoss: -2200.75,
    profitLossPercent: -5.44,
    count: 3,
  },
];
