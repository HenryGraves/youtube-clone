import axios from 'axios';
const apiKey = 'AIzaSyDDP0uyJjeTXYFxLCEhCaj8b6StpGh2HZI';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    key: apiKey,
  }
});