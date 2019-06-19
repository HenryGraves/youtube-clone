import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID c223b2b379ae3db8c48eaf45e11e83472c3dc0e3e2cd48d89945cd0641983fb8' 
  }
});

