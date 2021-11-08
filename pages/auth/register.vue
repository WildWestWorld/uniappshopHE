<template>
	<view>
		<!-- 昵称 -->
		<!-- 邮箱 -->
		<!-- 密码 -->
		<!-- 确认密码 -->
		<!-- 提交按钮 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				email:'',
				password:'',
				password_confirmation:'',
			}
		},
		methods: {
			submit(){
				//1.表单验证  作用是验证 表单的昵称邮箱命名是否规范，两次密码是否一致
				//2.准备提交参数
				const params={
					name:this.name,
					email:this.email,
					password:this.password,
					password_confirmation:this.password_confirmation,
				}
				//3.请求API，完成注册  请求api需要去common目录注册
				const res = this.$u.api.authRegister(params)
			}
		}
	}
</script>

<style>

</style>
