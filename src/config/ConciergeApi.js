import api from ".";

export default {
    findBudgets: () => api.get('/concierge-budgets').then(res => res.data),
    findEvents: () => api.get(`/concierge-events`).then(res => res.data),
    findLooks: () => api.get(`/concierge-looks`).then(res => res.data),
    findMaterials: () => api.get(`/concierge-materials`).then(res => res.data),
    findOrnaments: () => api.get(`/concierge-ornaments`).then(res => res.data),
    findColors: () => api.get(`/concierge-colors`).then(res => res.data),
    findGenders: () => api.get(`/concierge-genders`).then(res => res.data),

    createConciergeInbox: (body) =>
        api.post(`/concierge-inboxes`, {
            "name": body.name,
            "age": body.age,
            "reach_me_at": body.reach_me_at,
            "concierge_budget": body.concierge_budget,
            "concierge_dress_event": body.concierge_dress_event,
            "concierge_dress_look": body.concierge_dress_look,
            "concierge_dress_material": body.concierge_dress_material,
            "concierge_dress_ornament": body.concierge_dress_ornament,
            "concierge_favourite_color": body.concierge_favourite_color,
            "concierge_gender": body.concierge_gender,
            "phone_number": body.phone_number,
            "special_notes": body.special_notes
        }).then(res => res.data),
}