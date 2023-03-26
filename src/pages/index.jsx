import { fetchCoinData } from "../utils/fetchCoinData";

import { useEffect, useState } from "react";
import CoinCard from "../components/CoinCard";
import Spinner from "../components/Spinner";
import { useCoinData } from "../hooks/useCoinData";
import { useInterval } from "../hooks/useInterval";

export default function Home({ cryptocurrencies }) {
  console.log(cryptocurrencies);
  const [crypto, setCrypto] = useState(cryptocurrencies);

  useEffect(() => {
    const fetchCryptocurrencies = async () => {
      const data = await fetchCoinData();
      setCrypto(data);
    };
    fetchCryptocurrencies();
  }, []);

  // const { error, data, fetchData } = useCoinData(cryptocurrencies);

  // useInterval(fetchData, 5000);

  // if (!cryptocurrencies) <Spinner />;

  // if (error) <div>{error}</div>;

  if (!crypto) <Spinner />;

  return (
    <>
      {crypto.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const cryptocurrencies = await fetchCoinData();

  return {
    props: {
      cryptocurrencies,
    },
  };
}
