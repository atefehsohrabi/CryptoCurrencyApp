const Base_Url =
  "https://api.coingecko.com/api/v3";
  const getCoinsUrl = ()=>{
      return `${Base_Url}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&`;
  }
  export { getCoinsUrl };
  