import React from "react";
import MyStock from "./MyStock";

function PortfolioContainer({ myPortfolio, onStockSell }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {myPortfolio.map((stock) => (
        <MyStock
          key={stock.name}
          ticker={stock.ticker}
          name={stock.name}
          type={stock.type}
          price={stock.price}
          onStockSell={onStockSell}
        />
      ))}
    </div>
  );
}

export default PortfolioContainer;
