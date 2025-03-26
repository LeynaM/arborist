import * as React from "react";
import { Tooltip } from "radix-ui";
import styles from "./tooltip.module.css";

function MyTooltip({ content, children }) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content side="right" className={styles["tooltip__content"]}>
            {content}
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export default MyTooltip;
