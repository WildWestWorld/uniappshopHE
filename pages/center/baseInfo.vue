<template>

	<view class="u-p-l-30 u-p-r-40">
		<u-form :model="form" ref="uForm" :error-type="errorType">
			<u-form-item label="昵称" prop="name" required>
				<u-input v-model="form.name" />
			</u-form-item>

		</u-form>
		<u-button @click="submit">提交</u-button>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				errorType:['message'],
				form: {
					name: '',
					
				},
				rules: {
					name: [{
						required: true,
						message: '请输入昵称',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],
				}
			}
		},


		methods: {
			submit() {
				this.$refs.uForm.validate(async (valid) => {
					if (valid) {
						//更新表单数据
						this.$u.api.userInfoUpdate(this.form)
						//刷新用户信息，更新vuex_user
						this.$u.utils.updateUser()
						this.$u.toast('更新成功')
					
					} 
				});
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
			this.form.name =this.vuex_user.name
		},
	}
</script>

<style>

</style>
