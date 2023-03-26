import { useEffect } from "react";
import CoinCard from "../components/CoinCard";
import Spinner from "../components/Spinner";
import { useCoinData } from "../hooks/useCoinData";
import { useInterval } from "../hooks/useInterval";
import { fetchCoinData } from "../utils/fetchCoinData";

export default function Home() {
  const { error, data, fetchData } = useCoinData();
  console.log(data);
  useInterval(fetchData, 5000);
  if (!data) return <Spinner />;
  if (error) return <div>Something went wrong</div>;
  return (
    <>
      {data.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </>
  );
}
