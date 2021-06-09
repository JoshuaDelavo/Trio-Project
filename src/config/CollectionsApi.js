import api from ".";

export default {
    detailLatest: () => api.get('/collections?_sort=id:DESC&_limit=1').then(res => res.data),
    find: () => api.get('/collections').then(res => res.data),
    detail: (id) => api.get(`/collections/${id}`).then(res => res.data),
    count: (id) => api.get(`/collections/count`).then(res => res.data)
}