import { useState, useEffect, useRef } from "react";
import clickTree from "./assets/tiny-swords/single-tree.png";
import styles from "./App.module.css";
import Shop from "./components/Shop/Shop";
import Stats from "./components/Stats/Stats";

function App() {
  const [money, setMoney] = useState(10);
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const rateRef = useRef(0);
  const treeRef = useRef([]);

  useEffect(() => {
    rateRef.current = count * 0.1;
  }, [count]);

  useEffect(() => {
    const incomeInterval = setInterval(() => {
      setMoney((prevMoney) => prevMoney + rateRef.current);
    }, 1000);

    return () => clearInterval(incomeInterval);
  }, []);

  function plantTree() {
    setMoney((prevMoney) => prevMoney - multiplier);
    setCount((prevCount) => prevCount + multiplier);

    treeRef.current.push({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    });
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles["left-panel"]}>
            <Shop
              multiplier={multiplier}
              setMultiplier={setMultiplier}
              money={money}
              setMoney={setMoney}
            />
            <Stats multiplier={multiplier} money={money} count={count} />
          </div>
          <div className={styles.field}>
            {treeRef.current.map((tree, index) => (
              <img
                key={index}
                src={clickTree}
                className={styles["mini-tree"]}
                style={{ top: tree.top, left: tree.left }}
              />
            ))}
            <div>
              <button onClick={plantTree} disabled={money < 1}>
                <img src={clickTree} />
              </button>
              <p>{count} trees planted</p>
            </div>
          </div>
        </div>
        <progress value={count} max="10000"></progress>
      </div>
    </>
  );
}

export default App;
