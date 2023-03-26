import axios from "axios";
import { useRouter } from "next/router";
import CoinCard from "../../components/CoinCard";
import {
  CRYPTOCURRENCIES,
  findByValue,
  formatPrice,
  getSymbols,
} from "../../utils";

const Coin = ({ id, cryptocurrencies }) => {
  const oneCoin = cryptocurrencies.find((coin) => coin.id === id);

  return <CoinCard coin={oneCoin} />;
};

export default Coin;

export const getStaticPaths = async () => {
  const paths = CRYPTOCURRENCIES.map((coin) => ({
    params: { id: coin.id },
  }));

  return { paths, fallback: false };
};
export const getStaticProps = async ({ params }) => {
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
      id: params.id,
      cryptocurrencies,
    },
  };
};
