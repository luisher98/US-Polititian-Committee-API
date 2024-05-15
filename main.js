import express from "express";
import dotenv from "dotenv";
import { getPolititianCommittees } from "./src/getCommittees.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/api/committees", (req, res) => {
  const inputPolititianName = req.query.polititianName;

  try {
    if (!inputPolititianName) {
      res.status(400).json({ error: "Polititian name is required" });
      throw new Error("Polititian name is required");
    }

    const committees = getPolititianCommittees(inputPolititianName);

    if (committees === null) {
      res.status(404).json({ error: "Polititan has no committees" });
    }

    res.json({ committees });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}/api/committees`);
});
