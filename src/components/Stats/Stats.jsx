import styles from "./Stats.module.css";

function Stats({ multiplier, money, count }) {
  return (
    <div className={styles.stats}>
      <h2>Stats</h2>
      <ul>
        <li>Current multiplier: {multiplier}</li>
        <li>Cost per tree: {100 / multiplier}p</li>
      </ul>
    </div>
  );
}

export default Stats;
