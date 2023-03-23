import CoinCard from '@/components/CoinCard';
import Layout from '@/components/Layout';
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <CoinCard />
      </Layout>
    </>
  );
};

export default Home;


