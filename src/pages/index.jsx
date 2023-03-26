import CoinCard from "../components/CoinCard";
import Spinner from "../components/Spinner";
import { useCoinData } from "../hooks/useCoinData";
import { useInterval } from "../hooks/useInterval";
import { fetchCoinData } from "../utils/fetchCoinData";

export default function Home({ cryptocurrencies }) {
  const { data, error, loading } = useCoinData(cryptocurrencies);

  if (error) return <div>Failed to load</div>;
  if (loading) return <Spinner />;

  return (
    <>
      {data.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </>
  );
}

export const getServerSideProps = async () => {
  const cryptocurrencies = await fetchCoinData();

  return {
    props: {
      cryptocurrencies: cryptocurrencies,
    },
  };
};
