<template>
	<view>

		<view class="u-flex user-box u-p-l-30 u-p-t-30 u-p-r-20 u-p-b-30">
			<view class="u-m-r-10">
				<u-avatar :src="vuex_user.avatar_url" size="140"></u-avatar>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20">{{vuex_user.name}}</view>
				<view class="u-font-14 u-tips-color">邮箱:{{vuex_user.email}}</view>
			</view>

		</view>

		<view class="u-m-t-20">
			<u-cell-group>

				<u-cell-item icon="setting" title="个人信息" @click="toBaseInfo"></u-cell-item>
			</u-cell-group>
		</view>

		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="rmb-circle" title="所有订单"></u-cell-item>
				<u-cell-item icon="star" title="商品收藏"></u-cell-item>
				<u-cell-item icon="map" title="收货地址"></u-cell-item>
			</u-cell-group>
		</view>

		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="reload" title="重新登录" @click="logout"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pic: 'https://uviewui.com/common/logo.png',
				show: true
			}
		},
		onLoad() {
			if (!this.$u.utils.isLogin()) return
		},
		methods: {
			toBaseInfo() {
				this.$u.route({

					url: 'pages/center/baseInfo'
				})
			},
			async logout() {
				//请求API，退出登录
				await this.$u.api.authLogout()
				this.$u.toast('登出成功')
				setTimeout(()=>{
					//清除token和用户信息
					this.$u.vuex('vuex_token',null)
					this.$u.vuex('vuex_user',{})
					//跳转到首页
					this.$u.route({
						type:'reLaunch',
						url:'pages/index/index'
					})
				},1500)
	
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #ededed;
	}

	.camera {
		width: 54px;
		height: 44px;

		&:active {
			background-color: #ededed;
		}
	}

	.user-box {
		background-color: #fff;
	}
</style>
