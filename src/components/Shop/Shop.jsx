import { Button } from "@radix-ui/themes";
import "./Shop.css";
import { inventory } from "./inventory";
import * as HoverCard from "@radix-ui/react-hover-card";
import MyTooltip from "./ui/Tooltip/Tooltip";

function Shop({ multiplier, setMultiplier, money, setMoney }) {
  return (
    <div className="shop">
      <div className="shop-header">
        <h2>Shop</h2>
        <h2>💰 {Math.floor(money)}</h2>
      </div>
      {inventory.map((item, index) => (
        <div key={index} className="item">
          <p>{item.name}</p>
          <MyTooltip content={item.description}>
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
          </MyTooltip>
        </div>
      ))}
    </div>
  );
}

export default Shop;
