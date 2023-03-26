import axios from "axios";
import CoinCard from "../components/CoinCard";
import Spinner from "../components/Spinner";
import {
  CRYPTOCURRENCIES,
  findByValue,
  formatPrice,
  getSymbols,
} from "../utils";

export default function Home({ cryptocurrencies }) {
  if (!cryptocurrencies) return <Spinner />;

  return (
    <>
      {cryptocurrencies.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await axios.get(
    `https://api.binance.com/api/v3/ticker/24hr?symbols=${JSON.stringify(
      getSymbols()
    )}`
  );
  const { data } = response;

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
  };
};
