import { programmingBasics } from "@/data/lesson/programmingBasics";
import HomeHeader from "./components/HomeHeader";
import LessonCard from "./components/LessonCard";

const Home = () => {
  return (
    <>
      <HomeHeader />
      /homeでここが表示されます。
      {programmingBasics.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </>
  );
};

export default Home;
