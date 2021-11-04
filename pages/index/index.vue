<template>
	<view >
	
	  <u-swiper :list="imgList"></u-swiper>
	  
	  <view class="u-m-t-15">
	  <u-tabs :list="sortList" bar-width=100 :is-scroll="false" :current="currentSort" @change="changeSort"></u-tabs>
	</view>
					<u-row gutter="16">
						<u-col span="6"v-for="i in 6">
							
								<navigator class="goods-item">
									<u-image width="100%" height="300rpx" src="https://oss.shop.eduwork.cn/product/2020-0820-5f3e092c2d07f.png"></u-image>
								
						
							<!-- 商品名字 -->
							<view class="title">javascript</view>
							
							<!-- 价格和销量 -->
							<view class="u-flex u-row-between">
								<view class="price">价格：￥50</view>
								<view class="sale">	销量：10</view>
							</view>
							</navigator>
							
						</u-col>
					</u-row>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			imgList:[
				'https://cdn.uviewui.com/uview/swiper/3.jpg',
				'https://cdn.uviewui.com/uview/swiper/2.jpg'
			],
			sortList:[
				{name:'默认'},
				{name:'销量'},
				{name:'推荐'},
				{name:'最新'},
			],
			currentSort: 0,
			}
		},
		async onLoad() {
		this.$u.api.index().then(res=>{
			console.log(res)
		})
		},
		methods: {
			changeSort(index) {
				this.currentSort = index
		}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-item{
		margin-top: 30rpx;
		padding: 40rpx;
		box-shadow:0 12rpx 20rpx 0 rgba(0,0,0,0.1)
	}
	.title{
		margin-top:10rpx ;
		font-weight:1000;
		font-size:32rpx;
	}
	.price{
		color:red;
	}
	.sale{
		color:#888;
	}
</style>
