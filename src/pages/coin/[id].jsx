import CoinCard from "../../components/CoinCard";
import Spinner from "../../components/Spinner";
import { useCoinData } from "../../hooks/useCoinData";
import { useInterval } from "../../hooks/useInterval";
import { fetchCoinData } from "../../utils/fetchCoinData";

const Coin = ({ id, cryptocurrencies }) => {
  const { error, data, fetchData } = useCoinData(cryptocurrencies);
  useInterval(fetchData, 5000);

  if (!data) return <Spinner />;
  const oneCoin = data.find((coin) => coin.id === id);

  if (!oneCoin) return <Spinner />;

  if (error) return <div>{error}</div>;
  return <CoinCard coin={oneCoin} />;
};

export default Coin;

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const cryptocurrencies = await fetchCoinData();
  return {
    props: {
      id: id,
      cryptocurrencies: cryptocurrencies,
    },
  };
};
