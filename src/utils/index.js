export const CRYPTOCURRENCIES = [
  {
    id: "BTC",
    name: "Bitcoin",
    symbol: "BTCBUSD",
    iconCode: 1,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
  },
  {
    id: "ETH",
    name: "Etherium",
    symbol: "ETHBUSD",
    iconCode: 1027,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
  },
  {
    id: "BNB",
    name: "BNB",
    symbol: "BNBBUSD",
    iconCode: 1839,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
  },
  {
    id: "XRP",
    name: "XRP",
    symbol: "XRPBUSD",
    iconCode: 52,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
  },
  {
    id: "DOGE",
    name: "Dogecoin",
    symbol: "DOGEBUSD",
    iconCode: 74,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
  },
  {
    id: "MATIC",
    name: "Polygon",
    symbol: "MATICBUSD",
    iconCode: 3890,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
  },
  {
    id: "SOL",
    name: "Solana",
    symbol: "SOLBUSD",
    iconCode: 5426,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
  },
  {
    id: "SHIB",
    name: "Shiba Inu",
    symbol: "SHIBBUSD",
    iconCode: 5994,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
  },
  {
    id: "APE",
    name: "ApeCoin",
    symbol: "APEBUSD",
    iconCode: 18876,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
  },
  {
    id: "NEAR",
    name: "NEAR Protocol",
    symbol: "NEARBUSD",
    iconCode: 6535,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
  },
  {
    id: "LUNC",
    name: "Terra Classic",
    symbol: "LUNCBUSD",
    iconCode: 4172,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
  },
  {
    id: "LUNA",
    name: "Terra",
    symbol: "LUNABUSD",
    iconCode: 20314,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
  },
];

function formatPrice(price = 0) {
  const formattedPrice = Math.round(Number(price) * 100) / 100;
  return `$${formattedPrice > 0 ? formattedPrice.toLocaleString() : price}`;
}

function extractValues(obj = [], prop = "") {
  return obj.map((item) => item[prop]);
}

function findByValue(obj = [], value = "", prop = "symbol") {
  return obj.find((item) => item[prop] === value);
}

const getSymbols = () => {
  return CRYPTOCURRENCIES.map((item) => item.symbol);
};

export { formatPrice, extractValues, findByValue, getSymbols };
