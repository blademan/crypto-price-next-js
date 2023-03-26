import CoinCard from "../components/CoinCard";
import { useCoinData } from "../utils/fetchCoinData";

const Home = () => {
  const cryptocurrencies = useCoinData();

  return (
    <>
      {cryptocurrencies.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </>
  );
};

export default Home;
