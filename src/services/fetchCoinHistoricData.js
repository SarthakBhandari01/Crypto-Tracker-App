import axiosInstance from "../Helper/axiosInstance";

export async function fetchCoinHistoricData(id, interval, days, currency) {
  try {
    const response = await axiosInstance.get(
      `/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
