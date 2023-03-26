import axios from "axios";
import CoinCard from "../components/CoinCard";
import Spinner from "../components/Spinner";
import { useCoinData } from "../hooks/useCoinData";
import { useInterval } from "../hooks/useInterval";
import {
  CRYPTOCURRENCIES,
  findByValue,
  formatPrice,
  getSymbols,
} from "../utils";
import { fetchCoinData } from "../utils/fetchCoinData";

export default function Home({ cryptocurrencies }) {
  console.log(cryptocurrencies);
  if (!cryptocurrencies) return <Spinner />;

  return (
    <>
      {cryptocurrencies.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  // const cryptocurrencies = await fetchCoinData();
  const response = await axios.get(
    `https://api.binance.com/api/v3/ticker/24hr?symbols=${JSON.stringify(
      getSymbols()
    )}`
  );
  const { data } = response;

  console.log(data, "data");
  const cryptocurrencies = CRYPTOCURRENCIES.map((crypto) => {
    const { lastPrice, lowPrice, highPrice } =
      findByValue(data, crypto.symbol) || [];

    return {
      ...crypto,
      highPrice: formatPrice(highPrice),
      lowPrice: formatPrice(lowPrice),
      price: formatPrice(lastPrice),
      prevPrice: crypto?.price || 0,
    };
  });

  return {
    props: {
      cryptocurrencies,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
};
