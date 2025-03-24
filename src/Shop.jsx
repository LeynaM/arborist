import "./Shop.css";

function Shop({ multiplier, setMultiplier }) {
  return (
    <div className="shop">
      <h2>Shop</h2>
      <div className="item">
        <p>Tree planting multiplier</p>
        <button
          className="shopButton"
          onClick={() => setMultiplier((prevMultiplier) => prevMultiplier + 1)}
        >
          Buy
        </button>
      </div>
      <div className="item">
        <p>Something</p>
        <button
          className="shopButton"
          onClick={() => console.log("Bought something")}
        >
          Buy
        </button>
      </div>
      <div className="item">
        <p>Something</p>
        <button
          className="shopButton"
          onClick={() => console.log("Bought something")}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default Shop;
