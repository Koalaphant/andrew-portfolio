import mockSkills from "@/mock/skills";

const prodSkills = [
  {
    skillTitle: "Loading",
    items: ["Coming soon"],
  },
];

const skills = process.env.NODE_ENV === "development" ? mockSkills : prodSkills;

export const Skills = () => {
  return (
    <div className="grid gap-2 grid-cols-1">
      {skills.map((skill) => (
        <div className="" key={skill.skillTitle}>
          <h3 className="self-start font-bold rounded-sm ">
            {skill.skillTitle}
          </h3>
          <p className="">{skill.items.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};
