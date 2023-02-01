import axios from "axios";

// const NEWS_API_KEY = "9c8e60bee636401f933ebf731951ada9";
// const URL = `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}&country=us`;

const NEWS_API_KEY = "54d9808c03df248aad9134e89c0ad4db";
const URL = `https://gnews.io/api/v4/top-headlines?token=${NEWS_API_KEY}&topic=breaking-news&country=us`;

export const fetchNews = async () => {
  const { data } = await axios.get(URL);
  console.log("data", data);
  return data;
};
