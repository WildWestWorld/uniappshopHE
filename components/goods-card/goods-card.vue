<template>
	<navigator class="goods-item" :url="`/pages/goods/show?id=${goods.id}`">
	
		<u-image class="u-skeleton-fillet" width="100%" height="300rpx" :src="goods.cover_url"></u-image>
	
		<!-- 商品名字 -->
		<view class="title u-line-1 u-skeleton-rect" >{{goods.title?goods.title:'商品名称'}}</view>
	
		<!-- 价格和销量 -->
		<view class="u-flex u-row-between ">
			<view class="price u-skeleton-rect">价格：￥{{goods.price}}</view>
			<view class="sale u-skeleton-rect"> 销量：{{goods.sales}}</view>
		</view>
	</navigator>
</template>

<script>
	export default {
		name:"goods-card",
		props:{
			goods:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.goods-item {
		margin-top: 30rpx;
		padding: 40rpx;
		box-shadow: 0 12rpx 20rpx 0 rgba(0, 0, 0, 0.1)
	}

	.title {
		margin-top: 10rpx;
		font-weight: 1000;
		font-size: 32rpx;
	}

	.price {
		color: red;
	}

	.sale {
		color: #888;
	}
</style>
