import * as dotenv from "dotenv"
import express from "express"
import { Configuration, OpenAIApi } from "openai"

dotenv.config()

const router = express.Router()

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

router.route('/').get((request, response) => {
  response.status(200).json({ message: "Hello from DALL.E routes!"})
})

router.route('/').post(async (request, response) => {
  try {
    const { prompt } = request.body

    const openAIResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    
    const image = openAIResponse.data.data[0].b64_json

    response.status(201).json({ photo: image })
  } catch (error) {
    console.log(error)
    response.status(500).json({ message: 'Something went wrong.'})
  }
})

export default router