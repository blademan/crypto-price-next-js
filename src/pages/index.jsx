import axios from "axios";
import {
  CRYPTOCURRENCIES,
  findByValue,
  formatPrice,
  getSymbols,
} from "../utils";

import CoinCard from "../components/CoinCard";

const Home = ({ cryptocurrencies }) => {
  return (
    <>
      {cryptocurrencies.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const symbols = getSymbols();
  const response = await axios.get(
    `https://api.binance.com/api/v3/ticker/24hr?symbols=${JSON.stringify(
      symbols
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
