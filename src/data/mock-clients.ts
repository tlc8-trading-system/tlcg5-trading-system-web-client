import type { Client } from "../types";

export const mockClients: Client[] = [
  {
    id: 'CLT-001',
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    role: 'Premium Trader',
    totalValue: 245680.50,
    pnl: '12450.75',
    portfolios: 3,
    activeTrades: 12,
  },
  {
    id: 'CLT-002',
    name: 'Sarah Rodriguez',
    email: 'sarah.rodriguez@example.com',
    role: 'Standard Trader',
    totalValue: 89320.00,
    pnl: '3210.25',
    portfolios: 1,
    activeTrades: 5,
  },
  {
    id: 'CLT-003',
    name: 'David Okonkwo',
    email: 'david.okonkwo@example.com',
    role: 'Enterprise Trader',
    totalValue: 1450000.00,
    pnl: '87650.00',
    portfolios: 8,
    activeTrades: 34,
  },
];
