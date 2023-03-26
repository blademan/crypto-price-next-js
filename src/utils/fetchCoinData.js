import axios from "axios";
import { CRYPTOCURRENCIES, findByValue, formatPrice, getSymbols } from ".";

const fetchCoinData = () => {
  const coinData = async () => {
    try {
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

      return cryptocurrencies;
    } catch (error) {
      console.error(error);
    }
  };

  const res = coinData();
  return res;
};

export { fetchCoinData };
