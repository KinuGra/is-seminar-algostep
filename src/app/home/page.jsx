import { programmingBasics } from "@/data/lesson/programmingBasics";
import HomeHeader from "./components/HomeHeader";
import LessonCard from "./components/LessonCard";
import styles from "./home.module.css";

const Home = () => {
	return (
		<>
			<HomeHeader />
			<div className={styles.container}>
				{programmingBasics.map((lesson) => (
					<LessonCard key={lesson.id} lesson={lesson} />
				))}
			</div>
		</>
	);
};

export default Home;
