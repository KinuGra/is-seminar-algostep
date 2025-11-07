import { notFound } from "next/navigation";

const LessonPage = async ({ params }) => {
  const { category, lessonId } = await params;

  if (category === "prog") {
    return (
      <>
        <div>{category}</div>
        <div>{lessonId}</div>
      </>
    );
  } else if (category === "algo") {
    return (
      <>
        <div>{category}</div>
        <div>{lessonId}</div>
      </>
    );
  } else {
    notFound();
  }
};

export default LessonPage;
