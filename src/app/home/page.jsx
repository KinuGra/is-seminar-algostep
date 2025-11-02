import HomeHeader from "./components/HomeHeader";
import LessonCard from "./components/LessonCard";

const Home = () => {
  return (
    <>
      <HomeHeader />
      /homeでここが表示されます。
      <LessonCard
        title="入出力の基礎"
        content="プログラムの入力と出力の基本を学びます"
        difficulty="easy"
      />
    </>
  );
};

export default Home;
