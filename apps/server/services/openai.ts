import { OpenAI } from 'openai'
import 'dotenv/config'

export type Message = {
  content: string
  role: 'user' | 'assistant'
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  maxRetries: 3,
  timeout: 59000
})

export async function getCompletion (messages: Message[]) {
  try {
    const chatCompletion = await openai.chat.completions
      .create({
        model: 'gpt-3.5-turbo',
        messages
      })
      .withResponse()
    return chatCompletion.data.choices[0].message
  } catch (err) {
    console.error(err)
  }
}
