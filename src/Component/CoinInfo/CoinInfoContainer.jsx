import { useQuery } from "react-query";
import { fetchCoinHistoricData } from "../../services/fetchCoinHistoricData";
import MyLoader from "../PageLoader/PageLoader";
import { useState } from "react";
import Alert from "../Alert/Alert";
import CoinInfo from "./CoinInfo";
import store from "../../State/store";


function CoinInfoContainer({ coinId }) {
  const { currency } = store();
  const [days, setDays] = useState(7);
  const [interval, setCoinInterval] = useState("daily");
  const { data, isLoading, isError, error } = useQuery(
    ["CoinHistoricData", coinId, currency, days, interval],
    () => fetchCoinHistoricData(coinId, interval, days, currency),
    {
      staleTime: 60 * 1000 * 2,
      cacheTime: 60 * 1000 * 2,
    }
  );

  if (isLoading) {
    return <MyLoader />;
  }
  if (isError) {
    return <Alert message={error} type={"error"} />;
  }
  return (
    <>
      <CoinInfo
        setCoinInterval={setCoinInterval}
        setDays={setDays}
        coinHistoricData={data}
        days={days}
        currency={currency}
      />
    </>
  );
}

export default CoinInfoContainer;
