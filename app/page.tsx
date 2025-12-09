import Divider from "@/components/Divider";
import MarkdownBlock from "@/components/MarkdownBlock";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import Title from "@/components/Title";
import { introMarkdown } from "@/data/intro-content";

export default function Home() {
  return (
    <>
      <div>
        <MarkdownBlock content={introMarkdown} />
      </div>
      <Title text="Technical Skills" emoji="🧠" />
      <Skills />
      <Divider />
      <Title text="Projects" emoji="💼" />
      <Projects />
    </>
  );
}
