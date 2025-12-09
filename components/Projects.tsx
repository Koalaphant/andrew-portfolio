import Link from "next/link";

import projects from "@/data/projects";
import { Button } from "./ui/button";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
      {projects.map((project) => (
        <div key={project.name} className="p-6 rounded-xl bg-foreground">
          <h2 className="font-bold text-lg text-center text-background mb-2">
            {project.name}
          </h2>
          <p className="text-background">{project.description}</p>
          <div className="mt-4 flex items-center gap-3 w-full">
            {project.url ? (
              <Button
                asChild
                className="flex-1 bg-background text-foreground hover:bg-background/90 border border-foreground/10 shadow-sm transition-all"
              >
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex w-full items-center justify-center gap-2"
                >
                  <span className="font-semibold tracking-wide">
                    Visit Project
                  </span>
                </Link>
              </Button>
            ) : null}
            {project.gitHubUrl ? (
              <Button
                asChild
                className="flex-1 bg-background text-foreground hover:bg-background/90 border border-foreground/10 shadow-sm transition-all"
              >
                <Link
                  href={project.gitHubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex w-full items-center justify-center gap-2"
                >
                  <span className="font-semibold tracking-wide">
                    Visit GitHub
                  </span>
                </Link>
              </Button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
