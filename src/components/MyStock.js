import React from "react";

function MyStock({ name, ticker, price, onStockSell }) {

    function handleStockSellClick() {
        const soldStock = { key: name, name, ticker, price }
        onStockSell(soldStock);
    };

    return (
        <div>
            <div className="card" onClick={handleStockSellClick} value={name}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{ticker}: {price}</p>
                </div>
            </div>
        </div>
    );
}

export default MyStock;