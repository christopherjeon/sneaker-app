import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertSneaker = payload => api.post(`/sneaker`, payload)
export const getAllSneakers = () => api.get(`/sneakers`)
export const updateSneakerById = (id, payload) => api.put(`/sneaker/${id}`, payload)
export const deleteSneakerById = id => api.delete(`/sneaker/${id}`)
export const getSneakerById = id => api.get(`/sneaker/${id}`)

const apis = {
    insertSneaker,
    getAllSneakers,
    updateSneakerById,
    deleteSneakerById,
    getSneakerById
}

export default apis
