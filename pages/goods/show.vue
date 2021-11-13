<template>
	<view>
		<!-- 图片框 -->
		<view style="text-align:center;">
			<img height="220" :src="goodsInfo.cover_url">
		</view>
		<!-- 文字框+销量的容器 -->
		<view class="top2" style="margin-top: -10px;">
			<!-- 文字框 -->
			<view class="title u-line-2">{{goodsInfo.title}}
			</view>
			<view class="des">
				<view class="price">价格：{{goodsInfo.price}}</view>
				<view class="sales">销量：{{goodsInfo.sales}}</view>
			</view>
		</view>

		<!-- 标签 -->
		<view>
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		</view>
		<!-- 标签滑动后的内容第一栏 -->
		<view v-if="current==0">
			<view class="info" style="u-p-b-80">
				<u-parse :html="goodsInfo.details"></u-parse>
			</view>
		</view>
		<!-- 标签滑动后的内容第二栏 -->
		<view v-if="current==1">
			<!-- 遍历数组获取数据 -->
			<view class="comment" v-for="(res,index)  in commentList" :key="res.id">
				<!-- 第二栏的左半部分 -->
				<view class="left">
					<image :src="res.user.avatar_url" mode="aspectFill">
					</image>
				</view>

				<!-- 第二栏的右半部分 -->
				<view class="right">
					<!-- 第二栏的右半部分的上面 -->
					<view class="top">
						<view class="name">{{ res.user.name }}</view>
						<!-- 点赞模块 -->
						<view class="like" :class="{ highlight: res.isLike }">
							<!-- 点赞模块之点赞次数 -->
							<view class="num">
								{{ res.likeNum }}
							</view>
							<!-- 点赞模块之图标 -->
							<!-- 点赞模块之图标灭 -->
							<u-icon v-if="!res.isLike" name="thumb-up" :size="30" color="#9a9a9a"
								@click="getLike(index)">
							</u-icon>
							<!-- 点赞模块之图标亮 -->
							<u-icon v-if="res.isLike" name="thumb-up-fill" :size="30" @click="getLike(index)">
							</u-icon>

						</view> <!-- 结束点赞模块 -->
					</view> <!-- 结束右上 -->

					<!-- 内容 -->
					<view class="content">{{ res.content }}</view>

					<!-- 回复栏 -->
					<view class="reply-box">
						<view class="reply-item" v-for="(item,index) in res.replyList" :key="item.index">
							<view class="username">{{ item.name }}</view>
							<view class="text">{{ item.contentStr }}</view>
						</view>

						<!-- 全部评论 -->
						<view class="all-reply" @tap="toAllReply" v-if="res.replyList !=undefined">
							共{{ res.allReply }}条回复
							<u-icon class="more" name="arrow-right" :size="26"></u-icon>
						</view>
					</view><!-- 回复栏完毕 -->

					<!-- 第二栏的底部 -->
					<view class="bottom">
						{{ res.created_at}}
						<view class="reply">回复</view>
					</view>
				</view><!-- 结束右半部分 -->
			</view> <!-- 结束第二栏 -->
		</view>
		<!-- 第三栏 -->
		<view v-if="current == 2" class="u-p-b-80">
			<u-row gutter="16">
				<u-col v-for="goods in goodsList" span="6">
					<goods-card :goods="goods"></goods-card>
				</u-col>
			</u-row>
		</view><!-- 第三栏完毕 -->


		<!-- //导航栏 -->
		<view class="navigation" style="position:fixed; bottom: 0;width :100%; display: flex;justify-content: center;">
			<!-- 左边 -->
			<view class="left">
				<view class="item u-text-center"  @click="collect">
					<block v-if="IsCollect == 0">
						<u-icon name="star" :size="40" color="black"></u-icon>
						<view class="text u-line-1">收藏</view>
					</block>

					<block v-else>
						<u-icon name="star" :size="40" color="red"></u-icon>
						<view class="text u-line-1"  style="color:red;">已收藏</view>
					</block>

				</view>

				<view class="item car">
					<u-badge class="car-num" :count="cartCount" type="error" :offset="[-3,-6]"></u-badge>
					<u-icon name="shopping-cart" :size="40" :color="$u.color['contentColor']"></u-icon>
					<view class="text u-line-1"> 购物车</view>
				</view>
			</view> <!-- 结束左边 -->

			<view class="right">
				<view class="cart btn u-line-1 " @click="addCart">加入购物车</view>
				<view class="buy btn u-line-1 ">立即购买</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '商品详情'
				}, {
					name: '商品评论',
					count: 999
				}, {
					name: '推荐商品',

				}],
				current: 0,
				commentList: [],
				goodsList: [],
				goodsId: null,
				goodsInfo: {},
				IsCollect:0,
				cartCount:0,
			}
		},
		onLoad(option) {
			this.goodsId = option.id
			this.getCartCount()

			this.getData()
		},
		methods: {
			async getData() {
				const res = await this.$u.api.goodsInfo(this.goodsId)
				this.goodsInfo = res.goods
				this.commentList = res.goods.comments
				this.goodsList = res.like_goods
				this.IsCollect=res.goods.is_collect
				this.list[1].count = res.goods.comments.length
				console.log(res);
			},
			change(index) {
				this.current = index;
			},
			getLike(index) {
				this.commentList[index].isLike = !this.commentList[index].isLike;
				if (this.commentList[index].isLike == true) {
					this.commentList[index].likeNum++;

				} else {
					this.commentList[index].likeNum--;
				}
			},
			async collect() {
				//请求收藏API
				await this.$u.api.goodsCollect(this.goodsId)
				if(this.IsCollect===0){
					this.$u.toast('收藏成功')
					this.IsCollect =1
				}
				else{
					this.$u.toast('取消收藏成功')
					this.IsCollect =0
				}
			},
			//加入购物车
			async addCart(){
				const params={
					goods_id: this.goodsId
				}
				await this.$u.api.cartAdd(params)
				//提示消息
				this.$u.toast('添加购物车成功')
				//重新获取购物车信息
				this.getCartCount()
			},
			
			//获取购物车数量
			async getCartCount(){
				const token = this.vuex_token
				if(token){
					const res = await this.$u.api.cartList()
					console.log(res);
					this.cartCount=res.data.length
				}
			},
			//评论列表
			getComment() {

			},
		}
	}
</script>

<style lang="scss" scoped>
	.top {
		margin: 40rpx 0;
		padding: 30rpx 40rpx;
		background: white;
		margin-bottom: 0;
	}

	.title {
		font-size: 36rpx;
		font-weight: 600;
	}

	.des {
		margin-top: 30rpx;
		display: flex;
		justify-content: space-between;
	}

	.price {
		font-size: 36rpx;
		color: red;
		font-weight: 600;
	}

	.sales {
		color: #333;
	}

	.comment {
		display: flex;
		padding: 30rpx;


		.left {
			image {
				width: 64rpx;
				height: 64rpx;
				border-radius: 50%;
				background-color: #f2f2f2;
			}
		}

		.right {
			flex: 1;
			padding-left: 20rpx;
			font-size: 30rpx;

			.top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 10rpx;

				.name {
					color: #5677fc;
					margin-top: -100rpx;
				}

				.like {
					display: flex;
					align-items: center;
					color: #9a9a9a;
					font-size: 26rpx;

					margin-top: -80rpx;

					.num {
						margin-right: 4rpx;
						color: #9a9a9a;
						margin-bottom: 20rpx;
					}
				}

				.highlight {
					color: #5677fc;

					.num {
						color: #5677fc;
					}

					//num毕
				}

				//highlight毕
			}

			//右上部分毕


			.content {
				margin-bottom: 10rpx;
			}

			.reply-box {
				background-color: rgb(242, 242, 242);
				border-radius: 12rpx;


				.item {
					padding: 20rpx;
					border-bottom: solid 2rpx $u-border-color;

					.username {
						font-size: 24rpx;
						color: #999999;
					}
				}

				.all-reply {
					padding: 20rpx;
					display: flex;
					color: #5677fc;
					align-items: center;

					.more {
						margin-left: 6rpx;
					}
				}

				//reply毕
			}

			//reply-box毕

			.bottom {
				margin-top: 20rpx;
				display: flex;
				font-size: 24rpx;
				color: #9a9a9a;


				.reply {
					color: #5677fc;
					margin-left: 10rpx;
				}
			}
		}

		//comment部分毕
	}

	//右半部分毕
	.navigation {
		display: flex;
		margin-top: 100rpx;
		border: solid 2rpx #f2f2f2;
		background-color: #FFFFFF;
		padding: 16rpx 0;

		.left {
			display: flex;
			font-size: 20rpx;


			.item {
				margin: 0 30rpx;

				&.car {
					text-align: center;
					position: relative;

					.car-num {
						position: absolute;
						top: -10rpx;
						right: -10rpx;
					}
				}
			}
		}

		//导航栏左半部分毕

		.right {
			display: flex;
			font-size: 28rpx;
			align-items: center;


			.btn {
				line-height: 66rpx;
				padding: 0 30rpx;
				border-radius: 36rpx;
				color: #FFFFFF;
			}

			.cart {
				background-color: #ed3f14;
				margin-right: 30rpx;
			}

			.buy {
				background-color: #ff7900;
			}
		}

		//导航栏右半部分毕
	}

	//导航栏毕
</style>
