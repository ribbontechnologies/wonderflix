import { PrismaClient } from "@prisma/client";
import express from "express";

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
  // just grab 8 films and pretend they are the trending and for you films since we don't have a recommender system
  const films = await prisma.film.findMany({
    take: 8,
  });
  const trending = films.slice(0, 4);
  const forYou = films.slice(4);

  const recent = await prisma.film.findMany({
    take: 5,
    orderBy: {
      releaseDate: "desc",
    },
  });

  res.json({
    trending,
    forYou,
    recent,
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
