import axios from "axios";

export const baseURL = 'http://216.244.94.171:1337'

const api = axios.create({
    baseURL: baseURL
});

export default api;