import CoinCard from "../../components/CoinCard";
import { fetchCoinData } from "../../utils/fetchCoinData";

const Coin = ({ cryptocurrencies, id }) => {
  const oneCoin = cryptocurrencies.find((coin) => coin.id === id);

  return <CoinCard coin={oneCoin} />;
};

export default Coin;

export const getStaticPaths = async () => {
  const cryptocurrencies = await fetchCoinData();

  const paths = cryptocurrencies.map((coin) => {
    return {
      params: {
        id: coin.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const cryptocurrencies = await fetchCoinData();

  return {
    props: {
      cryptocurrencies,
      id: id,
    },
  };
};
