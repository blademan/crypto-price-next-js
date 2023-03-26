import axios from "axios";
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

export const getServerSideProps = async (context) => {
  const { id } = context.query;
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
      id,
      cryptocurrencies,
    },
  };
};
