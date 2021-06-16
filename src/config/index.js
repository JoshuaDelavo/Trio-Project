import axios from "axios";

export const baseURL = 'https://sebastiangunawansignature.com/api'

const api = axios.create({
    baseURL: baseURL
});

export default api;