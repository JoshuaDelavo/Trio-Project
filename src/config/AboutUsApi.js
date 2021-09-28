import api from ".";

export default {
    find: () => api.get('/about-us').then(res => res.data),
    detailAll: () => api.get('/about-us?_sort=id:DESC').then(res => res.data),
    findSlider1: () => api.get('/about-us-slider-1-s').then(res => res.data),
    findSlider2: () => api.get('/about-us-slider-2-s').then(res => res.data),
}