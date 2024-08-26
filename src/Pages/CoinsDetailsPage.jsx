import { useParams } from "react-router-dom";
import { FetchCoinDetails } from "../services/fetchCoinDetails";
import { useEffect } from "react";

function CoinsDetailPage() {
    useEffect(()=>{
        FetchCoinDetails("bitcoin");
    },[])
    const {coinId}=useParams();
  return <div>coins details page {coinId}</div>;
}

export default CoinsDetailPage;
