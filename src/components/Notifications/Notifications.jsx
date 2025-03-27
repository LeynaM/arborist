import * as Toast from "@radix-ui/react-toast";
import styles from "./Notifications.module.css";
import { useState } from "react";

function Notifications({ open, setOpen }) {
  return (
    <Toast.Provider>
      <Toast.Root open={open} onOpenChange={setOpen} className={styles.toast}>
        <Toast.Description>Bonjour! 🥐</Toast.Description>
        <Toast.Action asChild altText="Close">
          <button className={styles.closeButton}>Close</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className={styles.toastViewport} />
    </Toast.Provider>
  );
}

export default Notifications;
