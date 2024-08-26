import axiosInstance from "../Helper/axiosInstance";

export async function fetchCoindata(currency = "usd", page = 1) {
  const perPage = 10;
  try {
    const response = await axiosInstance.get(
      `/coins/markets?vs_currency=${currency}&per_page=${perPage}&order=market_cap_desc&page=${page}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
