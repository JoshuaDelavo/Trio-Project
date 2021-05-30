import api from ".";

export default {
    find: () => api.get(`/our-networks`).then(res => res.data),
}