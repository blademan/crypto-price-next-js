import Link from 'next/link'

const CoinCard = (props: any) => {

  return (
    <Link
      className="flex max-w-full flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
      href="https://create.t3.gg/en/usage/first-steps"
      target="_blank"
    >
      <img src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png' width='100' height='100' alt='coin-logo' />
      <h3 className="text-2xl font-bold">First Steps →</h3>
      <div className="text-lg">
        Just the basics - Everything you need to know to set up your
        database and authentication.
      </div>
    </Link>
  )

}

export default CoinCard