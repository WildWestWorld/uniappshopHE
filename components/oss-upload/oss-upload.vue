<template>
	<view>
		<u-upload 
		ref="upload"
		:action="action" :max-size="5*1024*1024" max-count="1" :multiple="false" :before-upload="beforeUpload"
			:custom-btn="true" :show-progress="false" :deletable="false" :show-upload-list="false"
			:form-data="formData" @on-success="onSuccess">
			<u-avatar slot="addBtn" :src="vuex_user.avatar_url" size="140"
			width="0" height="0"></u-avatar>
		</u-upload>



	</view>
</template>

<script>
	let _this = {};
	export default {
		name: "oss-upload",
		data() {
			return {
				action: '',
				formData: {},
				upFilename:'',
			};
		},
		created() {
			_this = this
		},
		methods: {
			
			async beforeUpload(index, list) {
				//获取本地上传的文件名
				console.log(list)
				const [{file}]=list

			
				// #ifdef H5
				const fileName = file.name
				// #endif
				
				// #ifndef H5
				const fileName = file.path
				// #endif
				
				console.log(fileName)
				
				//获取文件后缀名
				// const suffix = fileName.slice(fileName.lastIndexOf('.'))
				
				const suffix = fileName.split(".").pop()
				console.log(suffix)
				
				//给上传的图片定义一个随机的名字
				
				const upFilename = `${this.$u.guid(20)}.${suffix}`
				console.log(upFilename);
				this.upFilename=upFilename
				//请求API，获取oss token
				const OssToken = await this.$u.api.authOssToken()
				console.log(OssToken)

				//上传域名
				_this.action = OssToken.host
				//设置osstoken
				_this.formData = {
					'key': upFilename,//自定义上传文件的名字
					'policy': OssToken.policy,
					'signature': OssToken.signature,
					'OssAccessKeyId': OssToken.accessid,
					'policy': OssToken.policy,
					'success_action_status': '200',
				}
			},
			
			async onSuccess(){
				//移除预览区的图片
				this.$refs.upload.remove(0)
				//请求API更新头像
				
					 await  this.$u.api.userAvatar({avatar:_this.upFilename})
				//重新缓存用户数据
					this.$u.utils.updateUser()
					this.$u.toast('头像更新成功')
					console.log('更新成功');
			}
			
		}
	}
</script>

<style>

</style>
