// fetch from https://xkcd.com/info.0.json and return the data using nextjs
import axios from "axios";

export default async function handler(req, res) {
  const data = await axios.get("https://xkcd.com/info.0.json");
  return res.json(data.data);
}
