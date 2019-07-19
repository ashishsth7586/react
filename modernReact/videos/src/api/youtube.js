import axios from 'axios';

const KEY = 'AIzaSyDDq3fBCS8FIYpbg7_GQYZ4qXzOoifmI6k';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet",
        maxResults: 5,
        key : KEY
    }
});