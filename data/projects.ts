export interface Project {
  name: string;
  url?: string;
  description: string;
  gitHubUrl: string;
}

const projects: Project[] = [
  {
    name: "NC News (Frontend)",
    url: "https://nc-news.duckpixel.com/",
    description:
      "React + Vite single-page client for the NC News API. Explore curated articles, drill into individual stories, sort/filter by topic, and participate in discussion threads with inline voting and commenting.",
    gitHubUrl: "https://github.com/Koalaphant/nc-news-proj",
  },
  {
    name: "NC News (Backend)",
    url: "https://nc-news.duckpixel.com",
    description:
      "NC News is an Express/Node backend that exposes a REST API for browsing, filtering, and commenting on news articles. It is backed by PostgreSQL and ships with seeds, tests, and a containerised deployment workflow so you can run the stack locally or on a VPS.",
    gitHubUrl: "https://github.com/Koalaphant/nc-news",
  },
  {
    name: "Test 3",
    url: "https://nc-news.duckpixel.com",
    description:
      "NC News is an Express/Node backend that exposes a REST API for browsing, filtering, and commenting on news articles. It is backed by PostgreSQL and ships with seeds, tests, and a containerised deployment workflow so you can run the stack locally or on a VPS.",
    gitHubUrl: "https://github.com/Koalaphant/nc-news",
  },
];

export default projects;
