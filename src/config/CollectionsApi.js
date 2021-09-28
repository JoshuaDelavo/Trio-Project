import api from ".";

export default {
    detailLatest: () => api.get('/collections?_sort=id:DESC&_limit=1').then(res => res.data),
    detailPage: () => api.get('/collections?_sort=id:DESC&_limit=4').then(res => res.data),
    detailAll: () => api.get('/collections?_sort=id:DESC').then(res => res.data),
    find: () => api.get('/collections').then(res => res.data),
    detail: (id) => api.get(`/collections/${id}`).then(res => res.data),
    count: (id) => api.get(`/collections/count}`).then(res => res.data),
    findLanding: (sort_type, limit, start) => api.get(`/collections?_sort=published_at=${sort_type}&_limit=${limit}&_start=${start}`).then(res => res.data),
}