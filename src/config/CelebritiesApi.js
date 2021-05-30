import api from ".";

export default {
    home: () => api.get(`/home-celebrities`).then(res => res.data),
    find: () => api.get('/celebrities').then(res => res.data),
    detail: (id) => api.get(`/celebrities/${id}`).then(res => res.data),
    count: (id) => api.get(`/celebrities/count`).then(res => res.data),
}