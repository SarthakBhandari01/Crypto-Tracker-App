import axiosInstance from "../Helper/axiosInstance";

export async function FetchCoinDetails(coinId) {
  try {
    const response = await axiosInstance.get(`/coins/${coinId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
