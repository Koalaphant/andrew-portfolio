export interface SkillsObject {
  skillTitle: string;
  items: string[];
}

const skills: SkillsObject[] = [
  {
    skillTitle: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind",
      "CSS",
      "Accessibility standards (WCAG)",
    ],
  },
  {
    skillTitle: "Backend and Database",
    items: ["Node.js", "Express", "PostgreSQL", "Prisma ORM", "RESTful APIs"],
  },
  {
    skillTitle: "Authentication",
    items: ["JWT", "Cookies", "Clerk"],
  },
  {
    skillTitle: "DevOps and Toolings",
    items: ["Jenkins", "GitHub", "Git", "CI/CD pipelines", "Postman"],
  },
  {
    skillTitle: "Design and Prototyping",
    items: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Elementor",
      "WordPress CMS",
    ],
  },
  {
    skillTitle: "Testing and debuggings",
    items: ["Jest", "Automated Accessibility Tools", "Browser Dev Tools"],
  },
  {
    skillTitle: "Other",
    items: ["Agile methodology", "Jira", "Litmus", "SEO optimisation"],
  },
];

export default skills;
