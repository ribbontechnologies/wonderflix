import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

// CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/get-dashboard-films', async (req, res) => {
  const films = await prisma.film.findMany({
    take: 20
  })

  const recentFilms = await prisma.film.findMany({
    take: 5,
    orderBy: {
      releaseDate: 'desc'
    }
  })

  res.json({
    trending: films.slice(0, 5),
    forYou: films.slice(5, 10),
    recent: recentFilms
  })
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
