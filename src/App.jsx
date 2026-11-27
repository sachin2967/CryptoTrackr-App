import React, { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import Header from "./Components/Header";
import Charts from "./Components/Charts";
import VerticalStrip from "./Components/Developer";

const App = () => {
  const [coins, setCoins] = useState({});
  const [top10IDs, setTop10IDs] = useState([]);
  const [headerValue, setHeaderValue] = useState("bitcoin");

  const handleHeaderValueChange = (value) => {
    setHeaderValue(value);
  };

  useEffect(() => {
    let isCurrent = true;

    const fetchCoinIds = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/list"
        );
        if (!response.ok) {
          throw new Error(`CoinGecko coin list request failed: ${response.status}`);
        }

        const data = await response.json();
        if (isCurrent) {
          setTop10IDs(data.slice(0, 100).map((coin) => coin.id));
        }
      } catch (error) {
        console.error("Unable to load the cryptocurrency list:", error);
      }
    };

    fetchCoinIds();
    return () => {
      isCurrent = false;
    };
  }, []);

  useEffect(() => {
    let isCurrent = true;

    const fetchSelectedCoin = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${encodeURIComponent(
            headerValue
          )}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
        );
        if (!response.ok) {
          throw new Error(`CoinGecko coin request failed: ${response.status}`);
        }

        const data = await response.json();
        if (isCurrent) {
          setCoins(data);
        }
      } catch (error) {
        console.error("Unable to load the selected cryptocurrency:", error);
        if (isCurrent) {
          setCoins({});
        }
      }
    };

    fetchSelectedCoin();
    return () => {
      isCurrent = false;
    };
  }, [headerValue]);

  return (
    <div className="container-fluid col-12">
      <div className="row">
        <VerticalStrip />
        <Header
          onHeaderValueChange={handleHeaderValueChange}
          top10={top10IDs}
        />
        <Cards coins={coins} />
        <Charts headerValue={headerValue} coins={coins} />
      </div>
    </div>
  );
};

export default App;
