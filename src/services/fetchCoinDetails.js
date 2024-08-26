import { COINGECKO_API_URL } from "../Helper/constants";

export async function FetchCoinDetails(coinId) {
  try {
    const response = await fetch(`${COINGECKO_API_URL}/coins/${coinId}`);
    const result=await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}
