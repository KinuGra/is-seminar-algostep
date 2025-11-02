import styles from "./LessonCard.module.css";

const difficultyLabels = {
    easy: "初級",
    medium: "中級",
    hard: "上級",
};

const LessonCard = ({ title, content, difficulty }) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.title}>{title}</div>
                <div className={styles.content}>{content}</div>
                <div className={`${styles.difficulty} ${styles[difficulty]}`}>
                    {difficultyLabels[difficulty]}
                </div>
            </div>
        </>
    );
};

export default LessonCard;
