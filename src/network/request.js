import axios from 'axios'
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://localhost:3000/api',
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
        let token = window.sessionStorage.getItem('token')
            // config.headers.Authorization = token
        return config
    })
    return instance(config)
}