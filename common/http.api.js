// /common/http.api.js

// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)


// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	// 此处没有使用传入的params参数
	vm.$u.api ={}

	//首页
	vm.$u.api.index = (params = {})=> vm.$u.get('/api/index',params);
	//注册相关
	vm.$u.api.authLogin=(params={})=> vm.$u.post('/api/auth/login',params);//登录
	vm.$u.api.authRegister=(params={})=> vm.$u.post('/api/auth/register',params);//注册
	vm.$u.api.authLogout=()=> vm.$u.post('/api/auth/logout');//退出登录
	vm.$u.api.authOssToken=()=> vm.$u.get('/api/auth/oss/token');//请求osstoken

	
	//用户相关
	vm.$u.api.userInfo=()=> vm.$u.get('/api/user');//获取用户信息
	
	vm.$u.api.userInfoUpdate=(params={})=> vm.$u.put('/api/user',params);//修改用户信息
	vm.$u.api.userAvatar=(params={})=> vm.$u.patch('/api/user/avatar',params);//上传用户图片
	
	//商品相关的
	vm.$u.api.goodsInfo=id=> vm.$u.get(`/api/goods/${id}`);//获取用户信息
	vm.$u.api.goodsCollect=id=> vm.$u.post(`/api/collects/goods/${id}`);
	vm.$u.api.goodsList=(params={})=> vm.$u.get(`/api/goods`,params);
	
	//购物车相关的
	vm.$u.api.cartAdd=(params={})=> vm.$u.post('/api/carts',params);//加入购物车
	vm.$u.api.cartList=()=> vm.$u.get('/api/carts');//获取购物车信息
	vm.$u.api.cartAllList=()=> vm.$u.get('/api/carts?include=goods');//获取完整的购物车信息
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下

}

export default {
	install
}
