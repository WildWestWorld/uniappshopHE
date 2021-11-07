const install = (Vue, vm) => {


	const isLogin = () => {
		const token = vm.vuex_token
		if (!token) {
			//来自哪个页面
			const currentPage = getCurrentPages().pop()
			//获取页面路径，和请求参数
			const {options,route} = currentPage //获取options对象与route
			//获取id
			const optionsKeys = Object.keys(options) //因为options是个对象，要用object.keys来获取id的名称
			let params = ''
			if (optionsKeys.length) {
				//用redece遍历optionskey数组，将初值设置为？，也就是prev=?,current=字符形式的id,
				// options[current]相当于说options对象里面的名称为ID的值
				//综上params=?(prev)+'id'(current)+'='+数字（option[current]）+'&'
				params = optionsKeys.reduce((prev, current) => `${prev}${current}=${options[current]}&`,'?').slice(0, -1)
				


			}
			//缓存当前页面
			uni.setStorageSync('back_url', route+params)
			vm.$u.toast('请登录')
			setTimeout(() => {
				vm.$u.route({
					type: 'redirect',
					url: 'pages/auth/login'
				})
			}, 1500)
			return false
		}
		return true
	}

	vm.$u.utils = {
		isLogin
	}

}

export default {
	install
}
