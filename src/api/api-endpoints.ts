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
    allTrades: baseUrl + "/api/order/open",
  },
  orderEndpoints: {
    allPendingOrders: baseUrl + "/api/order",
    placeOrder: baseUrl + "/api/order"
  },
  assetEndpoints: {
    allAssets: baseUrl + "/api/marketdata/assets/" + exchange1,
  },
  portfolioEndpoints: {
    myPortfolios: baseUrl + "/api/client/portfolio"
  }
};
