import Link from "next/link";
import { useRouter } from "next/router.js";
import { usePriceColorChange } from "../hooks/usePriceColorChange";
const CoinCard = ({ coin }) => {
  const router = useRouter();

  const isIdPage = router.route === "/coin/[id]";

  const {
    id,
    name,
    symbol,
    iconCode,
    price,
    highPrice,
    lowPrice,
    colorClassName,
  } = usePriceColorChange(coin);

  if (isIdPage) {
    // If the current route is an [id] page, render the link as text
    return (
      <div className="mb-5 flex max-w-full flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
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

        <span className={colorClassName} title={price}>
          {price}
        </span>

        <div className="mt-4">
          <div className="flex items-center">
            <p className="flex-1 text-sm text-gray-400">24h High</p>
            <div className="font-semibold text-gray-500">{highPrice}</div>
          </div>
          <div className="flex items-center">
            <p className="flex-1 text-sm text-gray-400">24h Low</p>
            <div className="font-semibold text-gray-500">{lowPrice}</div>
          </div>
          <div className="flex items-center">
            <p className="flex-1 text-sm text-gray-400">Market</p>
            <div className="font-semibold text-gray-500">{symbol}</div>
          </div>
        </div>
      </div>
    );
  }
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

      <span className={colorClassName} title={price}>
        {price}
      </span>

      <div className="mt-4">
        <div className="flex items-center">
          <p className="flex-1 text-sm text-gray-400">24h High</p>
          <div className="font-semibold text-gray-500">{highPrice}</div>
        </div>
        <div className="flex items-center">
          <p className="flex-1 text-sm text-gray-400">24h Low</p>
          <div className="font-semibold text-gray-500">{lowPrice}</div>
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
