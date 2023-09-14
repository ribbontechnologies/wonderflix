import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.get('/actors', async (req, res) => {
  const actors = await prisma.actor.findMany()
  res.json(actors)
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
