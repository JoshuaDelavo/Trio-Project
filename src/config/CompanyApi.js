import api from ".";

export default {
    find: () => api.get(`/company`).then(res => res.data),
}