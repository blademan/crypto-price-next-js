import { useCallback, useState } from "react";
import { fetchCoinData } from "../utils/fetchCoinData";
const useCoinData = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

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
