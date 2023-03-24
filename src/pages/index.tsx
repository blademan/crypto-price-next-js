import CoinCard from "@/components/CoinCard";
import useTicker from "@/utils/useGetCoins";
import { type NextPage } from "next";

const Home: NextPage = () => {
  const { query, mappedCryptocurrencies } = useTicker();

  console.log(`INDEX`, useTicker());

  if (query.isLoading) return <div>Loading...</div>;

  return (
    <>
      {mappedCryptocurrencies?.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </>
  );
};

export default Home;
