import CoinCard from "../../components/CoinCard";
import { fetchCoinData } from "../../utils/fetchCoinData";

const Coin = () => {
  const cryptocurrencies = fetchCoinData();
  const oneCoin = cryptocurrencies.find((coin) => coin.id === id);

  return <CoinCard coin={oneCoin} />;
};

export default Coin;

export const getStaticProps = async (context) => {
  const { id } = context.params;

  return {
    props: {
      id: id,
    },
  };
};
