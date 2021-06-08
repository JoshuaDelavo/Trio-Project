import api from ".";

export default {
    findLatest: () => api.get('/news-articles?_sort=id:DESC&_limit=6').then(res => res.data),
    find: () => api.get('/news-articles').then(res => res.data),
    detail: (id) => api.get(`/news-articles/${id}`).then(res => res.data),
    count: () => api.get(`/news-articles/count`).then(res => res.data),
}