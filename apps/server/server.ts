import express from "express";
import { PrismaClient } from "@prisma/client";
import { getCompletion } from "./services/openai";
import { ASSISTANT_PROMPT, JSON_RETURN } from "./prompts";

const app = express();
const prisma = new PrismaClient();

// CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.json());

app.get("/get-dashboard-films", async (req, res) => {
  const films = await prisma.film.findMany({
    take: 8,
  });

  const recentFilms = await prisma.film.findMany({
    take: 5,
    orderBy: {
      releaseDate: "desc",
    },
  });

  res.json({
    trending: films.slice(0, 4),
    forYou: films.slice(4),
    recent: recentFilms,
  });
});

app.post("/get-completion", async (req, res) => {
  const { messages } = req.body;

  const chatCompletion = await getCompletion([
    {
      content: ASSISTANT_PROMPT,
      role: "system",
    },
    ...messages,
  ]);
  if (!chatCompletion?.content) return res.status(500).send();
  const isRecommendingFilmsCheck = await getCompletion([
    {
      content:
        "Detect if the assistant message is recommending films. if it is, return 'yes' and only 'yes'. if not, return 'no' and only 'no'.",
      role: "system",
    },
    {
      content: chatCompletion.content || "",
      role: "assistant",
    },
  ]);
  if (!isRecommendingFilmsCheck?.content) return res.status(500).send();

  let recommendation;
  if (chatCompletion.content && isRecommendingFilmsCheck.content.toLowerCase().includes("yes")) {
    recommendation = await getCompletion([
      {
        role: "system",
        content: JSON_RETURN,
      },
      {
        content: chatCompletion?.content,
        role: "user",
      },
    ]);
  }

  res.json({ message: recommendation || chatCompletion });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
