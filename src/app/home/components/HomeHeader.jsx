import styles from "./HomeHeader.module.css";

export default function HomeHeader() {
    return (
        <>
            <header>
                <div className={styles.header}>
                    <div className={styles.bg}>💻</div>
                    <div>
                        <h1 className={styles.maintxt}>プログラミング学習</h1>
                        <p className={styles.subtxt}>
                            アルゴリズムとデータ構造を学ぼう
                        </p>
                    </div>
                </div>
            </header>
        </>
    );
}
