import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Home page");
});

router.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

const projects = [
  { name: "Weather-app", tag: "javascript" },
  { name: "Portfolio-site", tag: "express" },
  { name: "Budget-tracker", tag: "python" },
];

router.get("/projects", (req, res) => {
  const tag = req.query.tag;
  const name = req.query.name;
  let filteredProjects = projects;
  // Filter by tag if provided
  if (tag) {
    filteredProjects = filteredProjects.filter(
      (project) => project.tag.toLowerCase() === tag.toLowerCase()
    );
  }
  // Filter by name if provided
  if (name) {
    filteredProjects = filteredProjects.filter(
      (project) => project.name.toLowerCase() === name.toLowerCase()
    );
  }
  // If no projects match, return a message
  if (filteredProjects.length === 0) {
    res.json({ message: "No projects found matching the given criteria." });
    return;
  }
  // Return the filtered projects
  res.json(filteredProjects);
});

export default router;
