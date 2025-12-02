import apiClient from "../../api-client";

export const getAllUsers = async () => {
  const { data } = await apiClient.get("");
  return data;
};

export const getUserById = async (id: string) => {
  const { data } = await apiClient.get(`/.../${id}`);
  return data;
};

// Add other user api call functions
