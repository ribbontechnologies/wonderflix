import express from 'express'
import { PrismaClient } from '@prisma/client'
import { getCompletion } from './services/openai'

const app = express()
const prisma = new PrismaClient()

// CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})

app.use(express.json())

app.get('/get-dashboard-films', async (req, res) => {
  const films = await prisma.film.findMany({
    take: 8
  })

  const recentFilms = await prisma.film.findMany({
    take: 5,
    orderBy: {
      releaseDate: 'desc'
    }
  })

  res.json({
    trending: films.slice(0, 4),
    forYou: films.slice(4),
    recent: recentFilms
  })
})

app.post('/get-completion', async (req, res) => {
  const { messages } = req.body
  const chatCompletion = await getCompletion(messages)
  res.json({ message: chatCompletion })
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
