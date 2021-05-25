import axios from 'axios';
import { ElMessage} from 'element-plus';

// 创建axios实例
const service = axios.create({
    baseURL: "http://localhost:3000", // 请求的api地址
    timeout: 5000 // 请求超时时间
})

//请求拦截器
service.interceptors.request.use(config => {
    //是否有token
    const token = localStorage.getItem("token");
    if (token) {
        config.headers['x-Token'] = token;
    }
    return config
}, error => {
    Promise.reject(error)
});

//响应拦截器
service.interceptors.response.use(response => {
    /**
  * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
  * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
  */

    const res = response.data;
    // 状态码与后端规范规定定义：这里表示返回code:20000则成功
    if (res.code !== 20000) {
        ElMessage.error({
            message: res.message, // 与后端规范定义返回错误信息
            type: 'error'
        });
    }

    // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    if ([50008, 50012, 50014].includes(res.code)) {
        //这里提示用户重新deng
        return Promise.reject('error')
    } else {
        return response.data;
    }


}, error => {
    ElMessage.error({
        message: error.message, // 与后端规范定义返回错误信息
        type: 'error',
        duration: 5 * 1000
    });
})

export default service;