import projects from "@/data/projects";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-5">
      {projects.map((project) => (
        <div key={project.name} className="p-6 rounded-xl bg-foreground">
          <h2 className="font-bold text-lg text-center text-background mb-2">
            {project.name}
          </h2>
          <p className="text-background">{project.description}</p>
          <a className="text-background" href={project.url}>
            {project.url}
          </a>
        </div>
      ))}
    </div>
  );
}
