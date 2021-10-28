import axios from "axios";
// Promise方式进行封装
export function request(config){
    const instance=axios.create({
      baseURL:'http://152.136.185.210:7878/api/hy66',
      timeout:5000
    })
    // 2.请求拦截器
    instance.interceptors.request.use(config=>{
      // console.log(config);
      /* 1.当config中的一些信息不符合服务器要求是进行拦截
      2.当每次发送网络请求时，都希望在界面上出现加载动画 loading
      3.某些网络请求（比如登录），必须携带一些特殊的信息 */
      return config;
    },err=>{
      console.log(err)
    });
    // 响应拦截
    instance.interceptors.response.use(res=>{
      
      return res.data;
    },err=>{
      console.log(err);
    });

    // 3.发送真正的网络请求
  return  instance(config)
}
// 回调函数的方式封装
/* export function request(config,success){
  // 1.创建axios实例
  const instance=axios.create({
    baseURL:'http://baidu.com',
    timeout:5000
  })
  instance(config).then(res=>{
    success(res);
  })
} */