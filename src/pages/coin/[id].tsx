import CoinCard from "@/components/CoinCard";
import { type GetServerSideProps, type NextPage } from "next";
interface Cryptocurrency {
  id: string;
  name: string;
  symbol: string;
  iconCode: number;
  price: number;
  prevPrice: number;
  highPrice: number;
  lowPrice: number;
}

interface CoinCardProps {
  coin: Cryptocurrency;
}

const Coin: NextPage<CoinCardProps> = ({ coin }) => {
  return <CoinCard coin={coin} />;
};

export default Coin;

export const getServerSideProps: GetServerSideProps<CoinCardProps> = async (
  context
) => {
  const { id } = context.query;
  const res = await fetch(
    `https://api.binance.com/api/v3/ticker/24hr?symbols=${id}`
  );
  const data = (await res.json()) as Cryptocurrency;
  return {
    props: {
      coin: data,
    },
  };
};
