/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CRYPTOCURRENCIES, findByValue, getSymbols } from "../utils";

interface Cryptocurrency {
  symbol: string;
  price: number;
  prevPrice: number;
  highPrice: number;
  lowPrice: number;
}

const useTicker = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState(CRYPTOCURRENCIES);

  const updateCryptocurrencies = useCallback(
    (data: any) => {
      setCryptocurrencies(
        cryptocurrencies.map((item) => {
          const { highPrice, lowPrice, lastPrice } = findByValue(
            data,
            item.symbol,
            "symbol"
          );

          return {
            ...item,
            highPrice,
            lowPrice,
            price: lastPrice,
            prevPrice: item?.price || 0,
          };
        })
      );
    },
    [cryptocurrencies]
  );

  const query = useQuery<Cryptocurrency[]>(["coinPrice"], async () => {
    const response = await axios.get<{ data: Cryptocurrency[] }>(
      `https://api.binance.com/api/v3/ticker/24hr?symbols=${JSON.stringify(
        getSymbols()
      )}`
    );
    const data = response.data;

    updateCryptocurrencies(data);

    return cryptocurrencies;
  });

  const mappedCryptocurrencies = useMemo(
    () =>
      cryptocurrencies.map((item) => ({
        ...item,
        price: item.price,
        prevPrice: item.prevPrice,
        highPrice: item.highPrice,
        lowPrice: item.lowPrice,
      })),
    [cryptocurrencies]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      query.refetch();
    }, 5000);
    return () => clearInterval(interval);
  }, [query]);

  return { mappedCryptocurrencies, query };
};
export default useTicker;
