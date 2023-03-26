import CoinCard from "../components/CoinCard";
import Spinner from "../components/Spinner";
import { useCoinData } from "../hooks/useCoinData";
import { useInterval } from "../hooks/useInterval";
import { fetchCoinData } from "../utils/fetchCoinData";

export default function Home({ cryptocurrencies }) {
  if (!cryptocurrencies) <Spinner />;
  const { error, data, fetchData } = useCoinData(cryptocurrencies);
  console.log(data);
  useInterval(fetchData, 5000);

  if (error) <div>{error}</div>;

  if (!data) <Spinner />;

  return (
    <>
      {data.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const cryptocurrencies = await fetchCoinData();

  return {
    props: {
      cryptocurrencies,
    },
  };
}
