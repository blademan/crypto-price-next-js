import { useEffect, useState } from "react";

function usePriceColorChange(initialCoin) {
  const [coin, setCoin] = useState(initialCoin);

  useEffect(() => {
    setCoin((prevCoin) => {
      return { ...initialCoin, prevPrice: prevCoin.price };
    });
  }, [initialCoin]);

  const { id, name, symbol, iconCode, price, prevPrice, highPrice, lowPrice } =
    coin;

  const colorClassName =
    prevPrice > price
      ? "text-red-500"
      : prevPrice < price
      ? "text-green-600"
      : "text-gray-500";

  return {
    id,
    name,
    symbol,
    iconCode,
    price,
    highPrice,
    lowPrice,
    colorClassName,
  };
}

export { usePriceColorChange };
