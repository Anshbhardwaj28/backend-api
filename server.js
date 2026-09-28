const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let tasks = [{ id: 1, title: "Learn Express", completed: false }];
let nextId = 2;

// Home
app.get("/", (req, res) => {
  res.json({ message: "Task API is running" });
});

// GET all tasks
app.get("/api/tasks", (req, res) => {
  res.json({ count: tasks.length, data: tasks });
});

// GET one task
app.get("/api/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
});

// POST new task (with validation)
app.post("/api/tasks", (req, res) => {
  const { title, completed = false } = req.body;

  if (typeof title !== "string" || title.trim().length < 3) {
    return res.status(400).json({ error: "title is required (min 3 characters)" });
  }
  if (typeof completed !== "boolean") {
    return res.status(400).json({ error: "completed must be true or false" });
  }

  const task = { id: nextId++, title: title.trim(), completed };
  tasks.push(task);
  res.status(201).json({ message: "Task created", data: task });
});

// Unknown routes
app.use((req, res) => res.status(404).json({ error: "Route not found" }));

// Bad JSON / server errors
app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ error: "Invalid JSON" });
  }
  res.status(500).json({ error: "Server error" });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));