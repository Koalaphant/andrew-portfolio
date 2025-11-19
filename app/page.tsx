import Divider from "@/components/Divider";
import { Skills } from "@/components/Skills";
import Social from "@/components/Social";
import Title from "@/components/Title";

export default function Home() {
  return (
    <>
      <div>
        <p className="text-2xl font-bold">Hello! 👋🏼</p>
        <Divider />
        <p>
          I&apos;m Andrew, a Software Engineer at a major UK energy company who
          loves solving problems and building clean, accessible interfaces with
          React, Next.js and TypeScript. I work on frontend development for
          customer platforms, supporting releases, refining features and helping
          keep everything running smoothly.
        </p>
        <Divider />
        <p>
          I also work in email development, where I&apos;ve helped improve the
          workflow by creating a markdown-based system and contributing to a
          reusable component design library.
        </p>
        <Divider />
        <p>
          Outside of coding, you&apos;ll usually find me watching football,
          tinkering with home automation or planning my next trip.
        </p>
      </div>
      <Title text="Technical Skills" emoji="🧠" />
      <Skills />
      <Divider amount="30" />
      <Social />
    </>
  );
}
