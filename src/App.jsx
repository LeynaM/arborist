import { useState, useEffect, useRef } from "react";
import clickTree from "./assets/tiny-swords/single-tree.png";
import styles from "./App.module.css";
import Shop from "./components/Shop/Shop";
import Stats from "./components/Stats/Stats";

function App() {
  const [money, setMoney] = useState(10);
  const [count, setCount] = useState(0);

  const multiplierRef = useRef(1);
  const incomeRateRef = useRef(0);
  const plantingRateRef = useRef(0);
  const treeRef = useRef([]);

  const plantTree = (numberToPlant) => {
    setCount((prevCount) => prevCount + numberToPlant);

    for (let i = 0; i < numberToPlant; i++) {
      treeRef.current.push({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      });
    }
  };

  const manualPlanting = () => {
    setMoney((prevMoney) => prevMoney - 1);
    plantTree(multiplierRef.current);
  };

  useEffect(() => {
    incomeRateRef.current = count * 0.1;
  }, [count]);

  useEffect(() => {
    const incomeInterval = setInterval(() => {
      setMoney((prevMoney) => prevMoney + incomeRateRef.current);
      plantTree(plantingRateRef.current);
    }, 1000);

    return () => clearInterval(incomeInterval);
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles["left-panel"]}>
            <Shop
              incomeRateRef={incomeRateRef}
              plantingRateRef={plantingRateRef}
              multiplierRef={multiplierRef}
              money={money}
              setMoney={setMoney}
            />
            <Stats
              multiplier={multiplierRef.current}
              money={money}
              count={count}
              rate={incomeRateRef.current}
            />
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
              <button onClick={manualPlanting} disabled={money < 1}>
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
