import { fetchCoinData } from "../utils/fetchCoinData";

import CoinCard from "../components/CoinCard";
import Spinner from "../components/Spinner";
import { useCoinData } from "../hooks/useCoinData";
import { useInterval } from "../hooks/useInterval";

export default function Home({ cryptocurrencies }) {
  const { error, data, fetchData } = useCoinData(cryptocurrencies);

  useInterval(fetchData, 5000);

  if (!cryptocurrencies) <Spinner />;

  if (error) <div>{error}</div>;

  return (
    <>
      {data.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const cryptocurrencies = await fetchCoinData();

  return {
    props: {
      cryptocurrencies,
    },
  };
}
