import api from ".";

export default {
    findBudgets: () => api.get('/concierge-budgets').then(res => res.data),
    findEvents: (id) => api.get(`/concierge-events`).then(res => res.data),
    findLooks: (id) => api.get(`/concierge-looks`).then(res => res.data),
    findMaterials: (id) => api.get(`/concierge-materials`).then(res => res.data),
    findOrnaments: (id) => api.get(`/concierge-ornaments`).then(res => res.data),
    findColors: (id) => api.get(`/concierge-colors`).then(res => res.data),
    findGenders: (id) => api.get(`/concierge-genders`).then(res => res.data),
}