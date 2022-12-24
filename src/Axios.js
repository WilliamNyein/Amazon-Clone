import axios from 'axios'

export const instance = axios.create({
    baseURL:'http://127.0.0.1:5001/clone-ad330/us-central1/api'
});

