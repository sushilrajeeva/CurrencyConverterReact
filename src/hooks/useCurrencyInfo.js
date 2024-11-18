import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  //storing the fetch data
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      //This url has the currency json of a currency to all other currency (latest)
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
      // `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));

    console.log(data);
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
