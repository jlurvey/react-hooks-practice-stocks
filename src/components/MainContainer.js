import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([]);
  const [myPortfolio, setMyPortfolio] = useState([]);
  const [stocksToDisplay, setStocksToDisplay] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then((r) => r.json())
      .then((stocks) => {
        setStocks(stocks)
        setStocksToDisplay(stocks);
      });
  }, []);

  function handleStockBuy(boughtStock) {
    if (!myPortfolio.some((stock) => stock.key === boughtStock.key)) {
      setMyPortfolio([...myPortfolio, boughtStock])
    };
  };

  function handleStockSell(soldStock) {
    setMyPortfolio(myPortfolio.filter((stock) => stock.key !== soldStock.key))
  };

  function handleSort(option) {
    if (option === 'Price') {
      setStocksToDisplay([...stocksToDisplay].sort((a, b) => a.price - b.price))
    } else {
      setStocksToDisplay([...stocksToDisplay].sort((a, b) => {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      }))
    }
  };

  function handleFilter(option) {
    setStocksToDisplay([...stocks].filter((stock) => stock.type === option))
  };


  return (
    <div>
      <SearchBar onSort={handleSort} onFilter={handleFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={stocksToDisplay}
            onStockBuy={handleStockBuy}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            myPortfolio={myPortfolio}
            onStockSell={handleStockSell}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
