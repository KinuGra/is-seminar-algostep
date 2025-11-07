import { programmingBasics } from "@/data/lesson/programmingBasics";
import HomeHeader from "./components/HomeHeader";
import LessonCard from "./components/LessonCard";
import styles from "./page.module.css";
import { algorithmAndDataStructures } from "@/data/lesson/algoAndDataStructures";
import Link from "next/link";

const Home = () => {
	return (
		<>
			<HomeHeader />
			<div style={{ backgroundColor: "#f7f7f7" }}>
				<div className={styles.title}>プログラミングの基礎</div>
				<div className={styles.container}>
					{programmingBasics.map((lesson) => (
						<Link key={lesson.id} href={`/lesson/prog/${lesson.id}`}>
							<LessonCard key={lesson.id} lesson={lesson} />
						</Link>
					))}
				</div>

				<div className={styles.title}>アルゴリズムとデータ構造の基礎</div>
				<div className={styles.container}>
					{algorithmAndDataStructures.map((lesson) => (
						<Link key={lesson.id} href={`/lesson/algo/${lesson.id}`}>
							<LessonCard key={lesson.id} lesson={lesson} />
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default Home;
