<template>
	<view class="u-skeleton">

		<u-swiper :list="slides" name="img_url" height="320"></u-swiper>

		<view class="u-m-t-15">
			<u-tabs :show-bar="false" :list="sortList" bar-width=100 :is-scroll="false" :current="currentSort" @change="changeSort">
			</u-tabs>
		</view>
		<u-row gutter="16">
			<u-col span="6" v-for="goods in goodsList.length !=0 ?goodsList : [{},{},{},{},{}]">

				<goods-card :goods="goods"></goods-card>

			</u-col>
		</u-row>
		<!--骨架屏-->
		<u-skeleton :loading="loading" :animation="true" bgColor="#FFF"></u-skeleton>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				sortList: [{
						name: '默认'
					},
					{
						name: '销量'
					},
					{
						name: '推荐'
					},
					{
						name: '最新'
					},
				],
				currentSort: 0,
				slides: [],
				goodsList: [],
				page: 1,
				loading: false
			}
		},
		async onLoad() {
			this.$u.utils.isLogin()
			
			this.getData()
		},

		methods: {
			changeSort(index) {
				this.currentSort = index
				this.getData()
				//点击就重置分页和商品数据
				this.goodsList = [];
				this.page = 1;
				this.getData();
			},
			async getData() {
				this.loading = true //显示骨架屏
				const params = {
					page: this.page
				}
				if (this.currentSort == 1) params.sales = 1;
				if (this.currentSort == 2) params.recommand = 1;
				if (this.currentSort == 3) params.new = 1;
				const res = await this.$u.api.index(params)
				this.loading = false //隐藏骨架屏
				this.slides = res.slides
				this.goodsList = [...this.goodsList, ...res.goods.data]
			},
			onReachBottom() {
				this.page += 1
				this.getData()
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
