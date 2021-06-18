import api from ".";

export default {
    find: () => api.get('/news-top-cover').then(res => res.data)
}