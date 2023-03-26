import axios from "axios";
import { CRYPTOCURRENCIES, findByValue, formatPrice, getSymbols } from ".";

const fetchCoinData = async () => {
  const api = process.env.NEXT_PUBLIC_API;
  try {
    const response = await axios.get(`${api}${JSON.stringify(getSymbols())}`);

    const { data } = response || [];

    const cryptocurrencies = CRYPTOCURRENCIES.map((crypto) => {
      const { lastPrice, lowPrice, highPrice, prevClosePrice } =
        findByValue(data, crypto.symbol) || {};

      return {
        ...crypto,
        highPrice: formatPrice(highPrice),
        lowPrice: formatPrice(lowPrice),
        price: formatPrice(lastPrice),
        prevPrice: formatPrice(prevClosePrice) || 0,
      };
    });
    return cryptocurrencies;
  } catch (error) {
    console.error(error);
    return { error: "An error occurred while fetching data." };
  }
};

export { fetchCoinData };
