import React from "react";

function Stock({ name, ticker, price, onStockBuy }) {

  function handleStockBuyClick() {
    const boughtStock = { key: name, name, ticker, price }
    onStockBuy(boughtStock);
  };

  return (
    <div>
      <div className="card" onClick={handleStockBuyClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}

export default Stock;