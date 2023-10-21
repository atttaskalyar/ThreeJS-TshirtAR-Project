import express from "express";
import * as dotenv from "dotenv";
// import { Confi, OpenAIApi } from "openai";
import { Configuration, OpenAIApi } from "openai";
dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(config);

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DallE routes" });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = response.data.data[0].b64_json;

    res.status(200).json({ image });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
