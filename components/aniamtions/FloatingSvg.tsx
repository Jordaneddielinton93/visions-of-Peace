import * as React from "react";
import styles from "./FloatingSvg.module.css";

export function FloatingSvg() {
  return (
    <div className={styles.area}>
      <ul className={styles.circles}>
        <li className={styles.circles_li}></li>
        <li className={styles.circles_li}></li>
        <li className={styles.circles_li}></li>
        <li className={styles.circles_li}></li>
        <li className={styles.circles_li}></li>
        <li className={styles.circles_li}></li>
        <li className={styles.circles_li}></li>
        <li className={styles.circles_li}></li>
        <li className={styles.circles_li}></li>
        <li className={styles.circles_li}></li>
      </ul>
    </div>
  );
}
