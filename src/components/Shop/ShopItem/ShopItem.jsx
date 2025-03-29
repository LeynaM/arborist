import { useState } from "react";
import styles from "./ShopItem.module.css";
import MyTooltip from "../ui/Tooltip/Tooltip";

function ShopItem({ item, money, setMoney, statRef }) {
  const [cost, setCost] = useState(item.initialCost);

  const buyItem = () => {
    statRef.current = statRef.current + item.booster;
    setMoney((prevMoney) => prevMoney - cost);
    setCost((prevCost) => prevCost * 1.2);
  };

  return (
    <div className={styles.item}>
      <p>{item.name}</p>
      <MyTooltip content={item.description}>
        <button
          className={styles["shop-button"]}
          disabled={money < cost}
          onClick={buyItem}
        >
          {cost} 🪙
        </button>
      </MyTooltip>
    </div>
  );
}

export default ShopItem;
