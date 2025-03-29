import styles from "./Shop.module.css";
import { inventory, effectTypes } from "./inventory";
import * as HoverCard from "@radix-ui/react-hover-card";
import MyTooltip from "./ui/Tooltip/Tooltip";
import ShopItem from "./ShopItem/ShopItem";

function Shop({
  incomeRateRef,
  plantingRateRef,
  multiplierRef,
  money,
  setMoney,
}) {
  const STAT = {
    [effectTypes.CLICK_MULTIPLIER]: multiplierRef,
    [effectTypes.PASSIVE_INCOME]: incomeRateRef,
    [effectTypes.PASSIVE_PLANTING]: plantingRateRef,
  };

  return (
    <div className={styles.shop}>
      <div className={styles["shop-header"]}>
        <h2>Shop</h2>
        <h2>💰 {Math.floor(money)}</h2>
      </div>
      {inventory.map((item, index) => (
        <ShopItem
          key={index}
          item={item}
          money={money}
          setMoney={setMoney}
          statRef={STAT[item.type]}
        />
      ))}
    </div>
  );
}

export default Shop;
