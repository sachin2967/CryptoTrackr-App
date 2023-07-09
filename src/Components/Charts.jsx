import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const Charts = ({ headerValue, coins}) => {
  const [chartData, setChartData] = useState([]);
  const [selection, setSelection] = useState("1");
  const [mark_cap, setMarCap] = useState([]);
  const [tot_vol, setTotVol] = useState([]);
  const { market_data,community_data} = coins;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/" + headerValue + "/market_chart?vs_currency=usd&days=" + selection
      );
      let data = await response.json();
      let data1 = data.prices;
      let data2 = data.market_caps;
      let data3 = data.total_volumes;



      if (Array.isArray(data1 && data2 && data3)) {
        setChartData(data1);
        setMarCap(data2);
        setTotVol(data3);
      } else if (typeof data1 === "object" && data2 === "object" && data3 === "object" && data1 !== null && data2 !== null && data3 !== null) {
        // const values = Object.values(data);
        // setChartData(values);
        setChartData(Object.values(data1));
        setMarCap(Object.values(data2));
        setTotVol(Object.values(data3));
      } else {
        console.error("Invalid response data: expected an array or object");
        return [];
      }
    };

    fetchData();
  }, [headerValue, selection]);

  const prices = {
    series: [
      {
        name: "Market Price",
        data: chartData,
      },
    ], options: {
      chart: {
        id: 'area-datetime',
      },
      grid: {
        show: false
      }, title: {
        text: "Market Price (USD)",
        style: {
          fontSize: '14px', fontWeight: 'bold', color: "#fcdf03"
        }
      }, stroke: {
        curve: 'smooth'
      }, xaxis: {
        type: "datetime"
      }, dataLabels: {
        enabled: false
      }, yaxis: {
        show: false
      }, colors: ["#fcdf03"],
      tooltip: {
        y: {
          formatter: (value) => value.toFixed(2)
        }, theme: "dark"
      }, selection: selection,
    }
  }

  const marketCap = {
    options: {
      grid: {
        show: false
      },
      title: {
        text: "Market Cap (USD)",
        style: {
          fontSize: '14px', fontWeight: 'bold', color: '#ff69f5'
        }
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: "datetime"
      },
      dataLabels: {
        enabled: false
      },
      yaxis: {
        show: false
      },
      colors: ["#ff69f5"],
      tooltip: {
        y: {
          formatter: (value) => value.toFixed(2)
        },
        theme: "dark"
      }
    },
    series: [
      {
        name: 'Market Cap (USD)',
        data: mark_cap
      }
    ]
  };

  const totalVolume = {
    options: {
      grid: {
        show: false
      },
      title: {
        text: "Market Volume",
        style: {
          fontSize: '14px', fontWeight: 'bold', color: "#00ffea"
        }
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: "datetime"
      },
      dataLabels: {
        enabled: false
      },
      yaxis: {
        show: false
      },
      colors: ["#00ffea"],
      tooltip: {
        y: {
          formatter: (value) => value.toFixed(2)
        },
        theme: "dark"
      }
    },
    series: [
      {
        name: "Market Volume",
        data: tot_vol
      }
    ]
  };




  return (<>
    <div className="d-flex flex-row justify-content-around container">
      <div className="left ">
        <div className="btns">
        <div className="btn-group" role="group" >
          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" checked={selection === "1"} onChange={() => setSelection("1")} />
          <label className="btn btn-outline-primary" htmlFor="btnradio1">1D</label>

          <input type="radio" className="btn-check" name="btnradio" id="btnradio2" checked={selection === "7"} onChange={() => setSelection("7")} />
          <label className="btn btn-outline-primary" htmlFor="btnradio2"> 1W </label>

          <input className="btn-check" type="radio" name="btnradio" id="btnradio3" checked={selection === "30"} onChange={() => setSelection("30")} />
          <label className="btn btn-outline-primary" htmlFor="btnradio3"> 1M </label>

          <input type="radio" className="btn-check" name="btnradio" id="btnradio4" checked={selection === "180"} onChange={() => setSelection("180")} />
          <label className="btn btn-outline-primary" htmlFor="btnradio4"> 6M </label>

          <input type="radio" className="btn-check" name="btnradio" id="btnradio5" checked={selection === "365"} onChange={() => setSelection("365")} />
          <label className="btn btn-outline-primary" htmlFor="btnradio5"> 1Y </label>
          </div>


          <div className="mixed-chart"> <Chart options={prices.options} series={prices.series} type="area" height='500' width='700' /></div></div>
      </div>
      <div className=" middle d-flex flex-column ">
        <div class="card text-center mb-3" style={{ width: "12rem" }}>
          <div class="card-body">
            <h5 class="card-title">Market cap</h5>
            <p class="card-text fw-bold">${market_data ? market_data.market_cap.usd : " "}</p>

          </div>
        </div>
        <div class="card text-center mb-3" style={{ width: "12rem" }}>
          <div class="card-body">
            <h5 class="card-title">Price change 24h</h5>
            <p class="card-text fw-bold">${market_data ? market_data.price_change_24h_in_currency.usd.toFixed(3) : " "}</p>
            

          </div>
        </div>
        <div class="card text-center mb-3" style={{ width: "12rem" }}>
          <div class="card-body">
            <h5 class="card-title">Total volume</h5>
            <p class="card-text fw-bold">${market_data ? market_data.total_volume.usd : " "}</p>

          </div>
        </div>
        <div class="card text-center mb-3" style={{ width: "12rem" }}>
          <div class="card-body">
            <h5 class="card-title">Circulating supply</h5>
            <p class="card-text fw-bold">{market_data ? market_data["circulating_supply"]: " "}</p>
          </div>
        </div>
        <div class="card text-center mb-3" style={{ width: "12rem" }}>
          <div class="card-body">
            <h5 class="card-title">Twitter followers</h5>
            <p class="card-text fw-bold">{community_data ? community_data.twitter_followers : " "}</p>
          </div>
        </div>
        </div>
      <div className="right d-flex flex-column ">
      <div> <Chart options={marketCap.options} series={marketCap.series} type="line" height='250' width='400' /></div>
      <div> <Chart options={totalVolume.options} series={totalVolume.series} type="line" height='250' width='400' /></div>
      </div>
    </div>

  </>);
};

export default Charts;
