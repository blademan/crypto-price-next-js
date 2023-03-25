import CoinCard from "../../components/CoinCard";
import { useCoinData } from "../../utils/fetchCoinData";

const Coin = ({ id }) => {
  const cryptocurrencies = useCoinData();
  const oneCoin = cryptocurrencies.find((coin) => coin.id === id);

  return <CoinCard coin={oneCoin} />;
};

export default Coin;

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  return {
    props: {
      id: id,
    },
  };
};
