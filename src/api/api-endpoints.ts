const baseUrl = import.meta.env.VITE_APP_SERVER_BASE_URL;

export const endpoints = {
    authEndpoints: {
        register: baseUrl + "api/auth/register",
        login: baseUrl + "/api/auth/login",
        logout: baseUrl + "/api/auth/logout"

    },
    userEndpoints: {
        me: baseUrl + "/api/user/me"
    },
    tradeEndpoints: {
        allTrades: baseUrl + "/api/order/open"
    }
}