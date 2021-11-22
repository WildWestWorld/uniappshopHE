<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		/* //作用是方便计算宽度,盒子的实际宽度是width-padding-boder */
		outline: 0;
		/* 盒子模型外的一条线 */
		user-select: noce;
		/* //禁止复制文本 */
		-webkit-tap-highlight-color: transparent;
	}
</style>
