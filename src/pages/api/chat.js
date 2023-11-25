// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  const referer = req.headers.referer || req.headers.referrer; // get the referer from the request headers

  if (req.method !== "POST") {
    res.status(405).json({ message: "Method should be POST" });
  } else {
    try {
      const { body } = req;
      const url = "https://api.openai.com/v1/chat/completions";
      // const token = "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";
      const token = "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";
      const headers = {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post(url, body, { headers: headers });

      res.status(200).json(response.data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
}
