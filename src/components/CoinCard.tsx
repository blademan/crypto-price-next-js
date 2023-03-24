/* eslint-disable @next/next/no-img-element */
import { formatPrice } from "@/utils";
import Link from "next/link";
import { type FC } from "react";

interface Cryptocurrency {
  id: string;
  name: string;
  symbol: string;
  iconCode: number;
  price: number;
  prevPrice: number;
  highPrice: number;
  lowPrice: number;
}

interface CoinCardProps {
  coin: Cryptocurrency;
}

const CoinCard: FC<CoinCardProps> = ({ coin }) => {
  const { id, name, symbol, iconCode, price, prevPrice, highPrice, lowPrice } =
    coin;

  const colorClassName = prevPrice
    ? price > prevPrice
      ? "text-green-600"
      : "text-red-500"
    : "text-gray-300";

  return (
    <Link
      className="mb-5 flex max-w-full flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
      href={`/coin/${id}`}
    >
      <div className="flex items-center gap-5">
        <img
          className="mb-2 h-10 w-10 rounded-full"
          src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${iconCode}.png`}
          alt={name}
          title={name}
        />

        <h5 className="mb-1 text-2xl font-semibold tracking-tight text-gray-300">
          {name}
        </h5>
      </div>

      <span className={colorClassName} title="28108.50000000">
        {formatPrice(price)}
      </span>

      <div className="mt-4">
        <div className="flex items-center">
          <p className="flex-1 text-sm text-gray-400">24h High</p>
          <div className="font-semibold text-gray-500">
            {formatPrice(highPrice)}
          </div>
        </div>
        <div className="flex items-center">
          <p className="flex-1 text-sm text-gray-400">24h Low</p>
          <div className="font-semibold text-gray-500">
            {formatPrice(lowPrice)}
          </div>
        </div>
        <div className="flex items-center">
          <p className="flex-1 text-sm text-gray-400">Market</p>
          <div className="font-semibold text-gray-500">{symbol}</div>
        </div>
      </div>
    </Link>
  );
};

export default CoinCard;
