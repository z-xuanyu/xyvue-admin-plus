import * as request from '../utils/request'

// 获取用户信息
export function getUserInfo(params){
    return request({
        url:'user',
        method:'get',
        params
    })
}