import { request } from './request'
export function userLogin(userEmail, userPassword) {
    return request({
        method: 'post',
        url: '/users/login',
        data: {
            "user": {
                email: userEmail,
                password: userPassword
            }
        }
    })
}
export function userRegister(userEmail, userPassword) {
    return request({
        method: 'post',
        url: '/users/register',
        data: {
            "user": {
                email: userEmail,
                password: userPassword
            }
        }
    })
}