import React from 'react'


const Cards = ({ coins }) => {
  const { name, market_data, sentiment_votes_up_percentage } = coins;



  return (<>

    <h1 className='fw-semibold'>{name}</h1>
    <div className="d-flex flex-wrap justify-content-around  ">
      <div className="card text-center mb-3 border-primary text-primary" style={{ width: "12rem" }}>
        <div className="card-body">
          <h5 className="card-title">Market cap 24h</h5>
          <p className="card-text">{market_data ? market_data.market_cap_change_percentage_24h : " "}%</p>
        </div>
      </div>
      <div className="card text-center border-warning text-warning mb-3" style={{ width: "12rem" }}>
        <div className="card-body">
          <h5 className="card-title">Trading Volume 24h </h5>
          <p className="card-text">${market_data?market_data.total_volume?.usd : " "}</p>
        </div>
      </div>
      <div className="card text-center border-secondary text-secondary mb-3" style={{ width: "12rem" }}>
        <div className="card-body">
          <h5 className="card-title">All-Time High</h5>
          <p className="card-text">${market_data?market_data.total_volume?.usd  : " "}</p>
        </div>
      </div>
      <div className="card text-center mb-3 border-info text-info" style={{ width: "12rem" }}>
        <div className="card-body">
          <h5 className="card-title">Positive Sentiments</h5>
          <p className="card-text">{sentiment_votes_up_percentage ? `${sentiment_votes_up_percentage}%` : " "}</p>
        </div>
      </div>
      <div className="card border-success text-success text-center mb-3" style={{ width: "12rem" }}>
        <div className="card-body">
          <h5 className="card-title ">High 24 Hours </h5>
          <p className="card-text ">${market_data ? market_data.high_24h.usd : " "}</p>
        </div>
      </div>
      <div className="card border-danger text-danger text-center mb-3" style={{ width: "12rem" }}>
        <div className="card-body">
          <h5 className="card-title  ">Low 24 Hours </h5>
          <p className="card-text ">${market_data ? market_data.low_24h.usd : " "}</p>
        </div>
      </div>
    </div>
    
  <div classN>
  <div className="text-center">
    {/* <p >Current Price</p> */}
    <div className="text-dark text-center fw-bold" style={{ overflow: 'visible', height: '2px', marginTop: "1%" }}> Current Price</div>
    <div ><span className='center text-center'  style={{
                        fontFamily: 'NHaasGroteskDSPro-65Md', fontSize: '90px',
                        fontWeight: '700', color: "#fcdf03", textDecoration: 'none solid rgb(255, 255, 255)',
                        textAlign: 'center'
                    }}>${market_data?market_data.current_price?.usd: " "}</span></div>  
  </div>
</div>


  </>
  )
}

export default Cards