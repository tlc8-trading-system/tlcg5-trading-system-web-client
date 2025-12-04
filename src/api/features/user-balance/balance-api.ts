import apiClient from "../../api-client";

export const getUserBalance = async () => {
  const { data } = await apiClient.get("balance-endpoint");
  return data;
};
