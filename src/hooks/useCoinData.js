import { useCallback, useState } from "react";
import { fetchCoinData } from "../utils/fetchCoinData";
const useCoinData = (cryptocurrencies) => {
  const [error, setError] = useState(cryptocurrencies.error);
  const [data, setData] = useState(cryptocurrencies);

  const fetchData = useCallback(async () => {
    setError(null);
    const newData = await fetchCoinData();
    if (newData.error) {
      setError(newData.error);
    } else {
      setData(newData);
    }
  }, []);

  return { error, data, fetchData };
};

export { useCoinData };
