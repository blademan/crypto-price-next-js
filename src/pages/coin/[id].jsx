import CoinCard from "../../components/CoinCard";
import { fetchCoinData } from "../../utils/fetchCoinData";

const Coin = ({ id, cryptocurrencies }) => {
  // const cryptocurrencies = fetchCoinData();
  const oneCoin = cryptocurrencies.find((coin) => coin.id === id);

  return <CoinCard coin={oneCoin} />;
};

export default Coin;

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const cryptocurrencies = await fetchCoinData();
  return {
    props: {
      cryptocurrencies: cryptocurrencies,
      id: id,
    },
  };
};
