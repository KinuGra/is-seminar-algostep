import styles from "./HomeHeader.module.css";
import { DiCode } from "react-icons/di";

export default function HomeHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <DiCode />
      </div>
      <div>
        <h1 className={styles.maintxt}>AlgoStep</h1>
        <p className={styles.subtxt}>初歩からプログラミングを学ぼう</p>
      </div>
    </div>
  );
}
