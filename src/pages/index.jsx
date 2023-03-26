import CoinCard from "../components/CoinCard";
import Spinner from "../components/Spinner";
import { useCoinData } from "../hooks/useCoinData";
import { useInterval } from "../hooks/useInterval";
import { fetchCoinData } from "../utils/fetchCoinData";

export default function Home({ cryptocurrencies }) {
  if (!cryptocurrencies) return <Spinner />;

  return (
    <>
      {cryptocurrencies.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const cryptocurrencies = await fetchCoinData();

  return {
    props: {
      cryptocurrencies,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
};
