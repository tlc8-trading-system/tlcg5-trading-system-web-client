import type { User } from "../../../types";
import apiClient from "../../api-client"
import { endpoints } from "../../api-endpoints";

export const getUser = async () => {
    const response = await apiClient.get(endpoints.userEndpoints.me);
    return response.data as User;
};