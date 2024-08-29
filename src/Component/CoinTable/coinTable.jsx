import { useContext, useEffect, useState } from "react";
import { fetchCoindata } from "../../services/fetchCoinData";
import { useQuery } from "react-query";
// import { CurrencyContext } from "../../Context/currencyContext";
import store from "../../State/store";
import { useNavigate } from "react-router-dom";
import PageLoader from "../PageLoader/PageLoader.jsx";

function CoinTable() {
  // useEffect(() => {
  //   fetchCoindata("usd",1);
  // },[]);

  // const { currency } = useContext(CurrencyContext);
  const { currency } = store();

  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery(
    ["coin", page, currency],
    () => fetchCoindata(currency, page),
    {
      // retry:2,0,
      // retryDelay:10000;
      cacheTime: 2 * 1000 * 60,
      staleTime: 2 * 1000 * 60,
    }
  );
  const navigate = useNavigate();
  function handleCoinRedirect(coinId) {
    navigate(`/details/${coinId}`);
  }
  if (isLoading) {
    return <PageLoader />;
  }
  if (isError) {
    return <div>Error :{error.message}</div>;
  }
  return (
    <div className="flex flex-col w-[80vw] items-center my-5 gap-5 justify-center mx-auto">
      <div className=" w-full flex font-semibold text-xl py-4 px-2  gap-3 bg-yellow-400 text-black ">
        {/* head  */}
        <div className="basis-[35%]">coin</div>
        <div className="basis-[25%]">price</div>
        <div className="basis-[20%]">24th change</div>
        <div className="basis-[20%]">Market Cap</div>
      </div>

      <div className="flex flex-col gap-2 w-[80vw] mx-auto">
        {isLoading && <PageLoader />}
        {data &&
          data.map((coin) => {
            return (
              <div
                key={coin.id}
                onClick={() => handleCoinRedirect(coin.id)}
                className="py-4 px-2 w-full bg-transparent flex items-center cursor-pointer text-white font-semibold justify-between"
              >
                <div className="flex justify-start  gap-3 basis-[35%] ">
                  <div className="h-[5rem] w-[5rem] ">
                    <img
                      src={coin.image}
                      className="h-full w-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-3xl">{coin.name}</div>
                    <div className="text-xl">{coin.symbol}</div>
                  </div>
                </div>
                <div className="basis-[25%]">{coin.current_price}</div>
                <div className="basis-[20%]">{coin.price_change_24h}</div>
                <div className="basis-[20%]">{coin.market_cap}</div>
              </div>
            );
          })}
      </div>
      <div className=" flex gap-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-primary btn-wide text-2xl"
        >
          prev
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="btn btn-secondary btn-wide text-2xl"
        >
          next
        </button>
      </div>
    </div>
  );
}

export default CoinTable;
