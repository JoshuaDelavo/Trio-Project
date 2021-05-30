import api from ".";

export default {
    find: () => api.get('/news-articles').then(res => res.data),
    detail: (id) => api.get(`/news-articles/${id}`).then(res => res.data),
    detail: (id) => api.get(`/news-articles/count`).then(res => res.data),
}