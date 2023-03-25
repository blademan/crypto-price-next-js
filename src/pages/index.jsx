// import CoinCard from "@/components/CoinCard";
import CoinCard from "../components/CoinCard";
import { useCoinData } from "../utils/fetchCoinData";

const Home = () => {
  const cryptocurrencies = useCoinData();

  // const { data: cryptocurrencies } = useQuery(["coinData"], fetchCoinData, {
  //   refetchInterval: 5000, // refetch data every 5 seconds
  //   retry: 3, // retry up to 3 times if a request fails
  // });

  return (
    <>
      {cryptocurrencies.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </>
  );
};

export default Home;
