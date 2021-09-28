import api from ".";

export default {
    find: () => api.get('/home-top-cover').then(res => res.data)
}