import React, { useEffect, useState } from 'react';
import Cards from './Components/Cards';
import Header from './Components/Header'
import Charts from './Components/Charts';
import VerticalStrip from './Components/Developer';

const App = () => {
    const [coins, setCoins] = useState([]);
    const [top10IDs, setTop10IDs] = useState([]);
  
    
    const [headerValue, setHeaderValue] = useState('bitcoin');

    const handleHeaderValueChange = (value) => {
      setHeaderValue(value);
    };
    useEffect(() => {
      fetchCoins();
    }, [headerValue]);
    // useEffect(() => {
    //   fetchCoins()
    //     .then((data) => {
    //       const coinIDs = extractCoinIDs(data);
    //       setTop10IDs(coinIDs);
    //     })
    // }, []);
    
    
    const fetchCoins = async () => {
      const response = await fetch(
        // 'https://api.coingecko.com/api/v3/coins/' + headerValue
        'https://api.coingecko.com/api/v3/coins/' + headerValue
      );
      const data = await response.json();
      setCoins(data); 
      extractCoinIDs();
      return data; }
    
      // const extractCoinIDs = (data) => {
      //   if (Array.isArray(data)) {
      //     return data.slice(0, 10).map((coin) => coin.id);
      //   } else if (typeof data === 'object' && data !== null) {
      //     const values = Object.values(data);
      //     return values.slice(0, 10).map((coin) => coin.id?coin.id:" ");
      //   } else {
      //     console.error('Invalid response data: expected an array or object');
      //     return [];
      //   }
      // };
      
      let coinIDs = [];
      const extractCoinIDs=async() => {
        const response = await fetch(
          // 'https://api.coingecko.com/api/v3/coins/' + headerValue
          'https://api.coingecko.com/api/v3/coins/'
        );
        const data = await response.json();
        const coins = data.slice(0, 100);
        coinIDs = coins.map((coin) => coin.id);
        setTop10IDs(coinIDs);
       
    }


     
  
  return (
    <div className='container-fluid col-12'>
      <div className="row">
      {/* <div className="col-12"> */}
      <VerticalStrip/>
      <Header onHeaderValueChange={handleHeaderValueChange} top10={top10IDs}/>
      
      
      <Cards coins={coins}/>

      <Charts headerValue={headerValue} coins={coins}/>
      </div>
      {/* </div> */}
    
    </div>
  )
}

export default App