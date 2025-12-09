const baseUrl = import.meta.env.VITE_APP_SERVER_BASE_URL;

export const endpoints = {
    authEndpoints: {
        register: baseUrl + "/auth/register",
        login: baseUrl + "/auth/login"
    }
}