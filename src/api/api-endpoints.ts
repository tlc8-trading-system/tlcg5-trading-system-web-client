const baseUrl = import.meta.env.VITE_APP_SERVER_BASE_URL;
const exchange1 = import.meta.env.VITE_APP_EXCHANGE_ONE_ID;

export const endpoints = {
  authEndpoints: {
    register: baseUrl + "/api/auth/register",
    login: baseUrl + "/api/auth/login",
    logout: baseUrl + "/api/auth/logout",
  },
  userEndpoints: {
    me: baseUrl + "/api/user/me",
    balance: baseUrl + "/api/client/balance",
  },
  tradeEndpoints: {
    tradeHistory: baseUrl + "/api/order/history",
    allTrades: baseUrl + "/api/order",
  },
  orderEndpoints: {
    allOrders: baseUrl + "/api/admin/orders",
    allPendingOrders: baseUrl + "/api/order",
    placeOrder: baseUrl + "/api/order",
  },
  assetEndpoints: {
    allAssets: baseUrl + "/api/marketdata/assets/" + exchange1,
  },
  portfolioEndpoints: {
    myPortfolios: baseUrl + "/api/client/portfolio",
    createPortfolio: baseUrl + "/api/client/portfolio",
    fetchPortfolio: baseUrl + "/api/client/portfolio",
    fetchPortfolioDetails: baseUrl + "/api/client/portfolio/",
  },
  exchanges: {
    getExchanges: baseUrl + "/api/admin/exchanges",
    toggleExchange: baseUrl + "/api/admin/exchanges/",
  },
  adminEndpoints: {
    clients: baseUrl + "/api/admin/clients",
    clientTrades: baseUrl + "/api/admin/clients/",
  },
};
