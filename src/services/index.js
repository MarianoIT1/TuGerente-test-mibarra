import axios from "axios"

const API = 'https://jsonplaceholder.typicode.com'

export default {
    fetchUsers: () => {
        return axios(`${API}/users`).then(res => res.data)
    },
    fetchPosts: () => {
        return axios(`${API}/posts`).then(res => res.data)
    },
    fetchPhotos: () => {
        return axios(`${API}/photos`).then(res => res.data)
    }
}