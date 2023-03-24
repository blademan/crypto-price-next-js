import Link from "next/link";

const CoinCard = ({ id }) => {
  return (
    <Link
      className="flex max-w-full flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
      href={`/coin/${id}`}
    >
      <div className="flex items-center gap-5">
        <img
          className="mb-2 h-10 w-10 rounded-full"
          src="https://s2.coinmarketcap.com/static/img/coins/128x128/1.png"
          alt="Bitcoin"
          title="Bitcoin"
        />

        <h5 className="mb-1 text-2xl font-semibold tracking-tight text-gray-300">
          Bitcoin
        </h5>
      </div>

      <span className="text-red-500" title="28108.50000000">
        $28,108.5
      </span>

      <div className="mt-4">
        <div className="flex items-center">
          <p className="flex-1 text-sm text-gray-400">24h High</p>
          <div className="font-semibold text-gray-500">$28,798.33</div>
        </div>
        <div className="flex items-center">
          <p className="flex-1 text-sm text-gray-400">24h Low</p>
          <div className="font-semibold text-gray-500">$27,345.35</div>
        </div>
        <div className="flex items-center">
          <p className="flex-1 text-sm text-gray-400">Market</p>
          <div className="font-semibold text-gray-500">BTCBUSD</div>
        </div>
      </div>
    </Link>
  );
};

export default CoinCard;
