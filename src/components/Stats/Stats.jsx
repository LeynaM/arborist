import styles from "./Stats.module.css";

function Stats({ multiplier, money, count, rate }) {
  return (
    <div className={styles.stats}>
      <h2>Stats</h2>
      <ul>
        <li>Click planting multiplier: {multiplier}</li>
        <li>Income rate: {rate.toFixed(2)} 🪙/s</li>
      </ul>
    </div>
  );
}

export default Stats;
