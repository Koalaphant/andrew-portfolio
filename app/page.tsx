import Divider from "@/components/Divider";
import MarkdownBlock from "@/components/MarkdownBlock";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import Title from "@/components/Title";
import { readFile } from "node:fs/promises";
import path from "node:path";

export default async function Home() {
  const introMarkdown = await readFile(
    path.join(process.cwd(), "data", "intro-content.md"),
    "utf-8"
  );

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
