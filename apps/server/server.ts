import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/actors", async (req, res) => {
  const actors = await prisma.actor.findMany();
  res.json(actors);
});

app.get("/films", async (req, res) => {
  const films = await prisma.film.findMany();
  res.json(films);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
