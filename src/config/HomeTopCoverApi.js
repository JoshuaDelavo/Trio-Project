import api from ".";

export default {
    find: () => api.get('/home-top-cover').then(res => res.data),
    detail: (id) => api.get(`/home-top-cover/${id}`).then(res => res.data),
}