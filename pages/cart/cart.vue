<template>
	<view>


		<view class="contain">
		<view class="footer">
		<view class="footer_left">
		</view>
			<label>
				<u-checkbox v-model="checked" shape="circle" size=50 icon-size=30>全选</u-checkbox>
			</label>
			
			<view class="footer_middle">
				<label>合计：</label>
				<text class="money">￥110.00</text>
			</view>
			
			<view class="footer_right">
				<button type="warn" size="mini">去结算</button>
			</view>
		</view>

</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: false,
			}
		},
		onLoad() {
			this.cartList()
		},
		methods: {
			async cartList() {
				const res = await this.$u.api.cartList()
				console.log(res);
			}

		}
	}
</script>

<style>
	.contain{
		height: 1624rpx;
		width:750rpx;
	}
	.footer {
		background: white;
		
		height: 100rpx;
		width: 100%;
		display: flex;
		bottom: 120rpx;
		left:0;
		position:fixed;
		
	}
	.footer_left{
		flex:0;
		width: 100%;
		height: 200rpx;
		text-align: center;
		line-height: 100rpx;
		padding-right: 30rpx ;
	
	}
	.footer_middle{
		
		width: 100%;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		font-size: 16px;

	
	}
	.money{
		
	}
</style>
