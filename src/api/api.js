import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'ab74dbff-8b73-4633-8f76-cb995987865d'
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    follow(id) {
        return instance.post(`follow/${id}`, {})
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
    },
}

export const authAPI = {
    getAuthStatus() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        })
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
}