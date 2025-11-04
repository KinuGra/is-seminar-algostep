import styles from "./LessonCard.module.css";

const difficultyLabels = {
	easy: "初級",
	medium: "中級",
	hard: "上級",
};

const LessonCard = ({ lesson }) => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.card}>
					<div className={styles.title}>{lesson.title}</div>
					<div className={styles.description}>{lesson.description}</div>
					<div className={`${styles.difficulty} ${styles[lesson.difficulty]}`}>
						{difficultyLabels[lesson.difficulty]}
					</div>
				</div>
			</div>
		</>
	);
};

export default LessonCard;
