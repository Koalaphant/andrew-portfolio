export interface Project {
  name: string;
  url?: string;
  description: string;
  gitHubUrl: string;
  techUsed: string[];
}

const projects: Project[] = [
  {
    name: "NC News (Frontend)",
    url: "https://nc-news.duckpixel.com/",
    description:
      "React + Vite single-page client for the NC News API. Explore curated articles, drill into individual stories, sort/filter by topic, and participate in discussion threads with inline voting and commenting.",
    techUsed: ["React 18", "TypeScript", "Vite", "React Router DOM", "Axios"],
    gitHubUrl: "https://github.com/Koalaphant/nc-news-proj",
  },
  {
    name: "NC News (Backend)",
    url: "https://nc-news.duckpixel.com",
    description:
      "NC News is an Express/Node backend that exposes a REST API for browsing, filtering, and commenting on news articles. It is backed by PostgreSQL and ships with seeds, tests, and a containerised deployment workflow so you can run the stack locally or on a VPS.",
    techUsed: ["Node.js", "Express", "PostgreSQL", "Jest + Supertest"],
    gitHubUrl: "https://github.com/Koalaphant/nc-news",
  },
  {
    name: "SplendEvent",
    url: "https://splendevent.vercel.app",
    description:
      "SplendEvent is an events platform that allows users to create accounts, log in, and register for both paid and free events. Users can view a list of their orders directly on the platform and add events to their Google Calendar.",
    techUsed: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Prisma + PostgreSQL",
      "Clerk Auth",
      "Stripe",
    ],
    gitHubUrl: "https://github.com/Koalaphant/events-platform",
  },
];

export default projects;
