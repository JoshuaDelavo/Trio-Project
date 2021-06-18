import api from ".";

export default {
    find: () => api.get('/collections-top-cover').then(res => res.data)
}