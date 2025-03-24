import "./Shop.css";
import { inventory } from "./inventory";

function Shop({ multiplier, setMultiplier, money, setMoney }) {
  return (
    <div className="shop">
      <div className="shop-header">
        <h2>Shop</h2>
        <h2>💰 {money}</h2>
      </div>
      {inventory.map((item, index) => (
        <div key={index} className="item">
          <p>{item.name}</p>
          <button
            className="shop-button"
            disabled={money < item.cost}
            onClick={() => {
              setMultiplier(item.effect);
              setMoney((prevMoney) => prevMoney - item.cost);
            }}
          >
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}

export default Shop;
