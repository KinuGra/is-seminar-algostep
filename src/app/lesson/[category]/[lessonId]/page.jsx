import MarkdownText from "@/components/MarkdownText";
import { programmingBasics } from "@/data/lesson/programmingBasics";
import { notFound } from "next/navigation";

const LessonPage = async ({ params }) => {
  const { category, lessonId } = await params;

  if (category === "prog") {
    return (
      <>
        <div>{category}</div>
        <div>{lessonId}</div>
        {programmingBasics[lessonId - 1].contents.map((section, index) => (
          <div key={index}>
            <MarkdownText content={section.markdown}></MarkdownText>
          </div>
        ))}
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
