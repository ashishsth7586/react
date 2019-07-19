import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 29efe52c238ff4477c929fdd8991ec92a83172b97d0a0ca6c144bcbf6566abcd '
    }
})