import { useState } from "react";
import clickTree from "./assets/tiny-swords/Resources/Trees/single-tree.png";
import "./App.css";
import Shop from "./Shop";

function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  function plantTree() {
    setCount((prevCount) => prevCount + multiplier);

    const field = document.querySelector(".field");

    const fieldWidth = field.clientWidth;
    const fieldHeight = field.clientHeight;

    for (let i = 0; i < multiplier; i++) {
      const randomX = Math.random() * (fieldWidth - 15);
      const randomY = Math.random() * (fieldHeight - 15);
      const tree = document.createElement("img");
      tree.src = clickTree;
      tree.style.position = "absolute";
      tree.style.width = "15px";
      tree.style.left = `${randomX}px`;
      tree.style.top = `${randomY}px`;
      console.log(i);
      field.appendChild(tree);
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className="main">
          <Shop multiplier={multiplier} setMultiplier={setMultiplier} />
          <div className="field">
            <div className="tree-button">
              <button onClick={plantTree}>
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
