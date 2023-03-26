import axios from "axios";
import { CRYPTOCURRENCIES, findByValue, formatPrice, getSymbols } from ".";

const useCoinData = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState(CRYPTOCURRENCIES);

  const fetchCoinData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.binance.com/api/v3/ticker/24hr?symbols=${JSON.stringify(
          getSymbols()
        )}`
      );
      const { data } = response;

      setCryptocurrencies((prev) =>
        prev.map((crypto) => {
          const { lastPrice, lowPrice, highPrice } =
            findByValue(data, crypto.symbol) || [];

          return {
            ...crypto,
            highPrice: formatPrice(highPrice),
            lowPrice: formatPrice(lowPrice),
            price: formatPrice(lastPrice),
            prevPrice: crypto?.price || 0,
          };
        })
      );
    } catch (error) {
      console.error(error);
    }
  }, [cryptocurrencies]);

  useEffect(() => {
    fetchCoinData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchCoinData();
    }, 5000);

    return () => clearInterval(interval);
  });

  return cryptocurrencies;

const fetchCoinData = async () => {
  // const api = process.env.NEXT_PUBLIC_API;
  try {
    const response = await axios.get(
      `https://api.binance.com/api/v3/ticker/24hr?symbols=${JSON.stringify(
        getSymbols()
      )}`
    );

    const { data } = response;

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
