import { programmingBasics } from "@/data/lesson/programmingBasics";
import HomeHeader from "./components/HomeHeader";
import LessonCard from "./components/LessonCard";
import styles from "./page.module.css";
import { algorithmAndDataStructures } from "@/data/lesson/algoAndDataStructures";

const Home = () => {
	return (
		<>
			<HomeHeader />

			<div className={styles.title}>プログラミングの基礎</div>
			<div className={styles.container}>
				{programmingBasics.map((lesson) => (
					<LessonCard key={lesson.id} lesson={lesson} />
				))}
			</div>

			<div className={styles.title}>アルゴリズムとデータ構造の基礎</div>
			<div className={styles.container}>
				{algorithmAndDataStructures.map((lesson) => (
					<LessonCard key={lesson.id} lesson={lesson} />
				))}
			</div>
		</>
	);
};

export default Home;
