import { useParams } from "react-router-dom";
import { FetchCoinDetails } from "../services/fetchCoinDetails";
import { useEffect } from "react";
import { useQuery } from "react-query";
import parse from "html-react-parser";
import store from "../State/store";

function CoinsDetailPage() {
  const { coinId } = useParams();
  const {currency}=store();
  const { isError, error, isLoading, data } = useQuery(
    ["coin", coinId],
    () => FetchCoinDetails(coinId),
    {
      cacheTime: 60 * 1000 * 2,
      staleTime: 60 * 1000 * 2,
    }
  );
  useEffect(() => {
    console.log(data);
  }, [data]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    console.log(error);
    <div>Something Went Wrong</div>;
  }
  return (
    <div className="flex flex-col md:flex-row">
      <div className=" flex flex-col w-full items-center md:w-1/3 mt-6 md:mt-0 border-r-2 border-gray-500">
        <img src={data?.image?.large} alt={data?.name} className="mb-5 h-52" />
        <div className="text-4xl mb-5 font-bold">{data?.name}</div>
        <div className="w-full px-6 py-4 text-justify text-white">{parse(data?.description?.en)}</div>
        <div className="w-full flex flex-col md:flex-row md:justify-around ">
          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="font-bold text-xl">
              Rank :
            </h2>
            <span className="ml-3 text-xl">
              {data?.market_cap_rank}
            </span>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-yellow-400">Current Price : </h2>
            <span className="text-xl ml-3">
              {data?.market_data?.current_price[currency]}
            </span>
          </div>
        </div>
      </div>
      <div className="md:w-2/3 w-full">
      coin information
      </div>
    </div>
  );
}

export default CoinsDetailPage;
