<template>

	<view class="greybgc">
		<link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
		<link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.3/css/all.css" rel="stylesheet">
		<view class="top">
			<view class="bgc">


				<view class="star">
					<view class="starContainer">
						<view class="">
							<image class="starimg" src="../../static/icon/star.png" mode=""></image>
						</view>
					</view>
					<view class="cartText">
						<view class="">
							<span>购物车(0)</span>
						</view>
						<view class="">
							<view class="">
								<span>共0件宝贝</span>
							</view>
						</view>

					</view>


				</view>

				<view class="circle">
					<view class="">
						<view class="circleContainer">
							<view class="moonImgContainer">
								<view class="">

								</view>
							</view>

						</view>
					</view>
				</view>

			</view>
		</view>




		<view class="content">
			<view class="shopList">
				<view class="">
					<view class="topList">
						<view class="">
							<view class="">
								<view class="whitebcg">

									<view class="">
										<view class="checkbox">
											<view class="">
												<u-checkbox v-model="checked" shape="circle" size="50" icon-size="30">
												</u-checkbox>
											</view>
										</view>
										<view class="icon-name">
											<view>
												<view class="git-icon">
													<view class="fab fa-github-alt">
														
													</view>
												</view>
												<view class="shop-name">
													<span>荣博书城</span>
												</view>
											</view>
										</view>
										<view class="arrow">
											<view class="fas fa-arrow-circle-right">
												
											</view>
										</view>
									</view>


								</view>
							</view>
						</view>
					</view>
					<view class="bottom-list">
						<view class="">
							
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="compute">

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
	/* 初始化 */
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

	.body {
		position: relative;
		padding-top: 1px;
		margin-top: -1px;
		margin-bottom: 160px;
		font-size: 32rpx;
	}

	.body,
	html {
		width: 100%;
		max-width: 768px;
		margin: 0 auto;
		background-color: #f2f2f2;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		top: 0;
	}

	.top {
		display: absolute;
		height: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1436rpx;
	}

	.top>view:first-child {
		background-image: linear-gradient(-90deg, #2196f3 35%, white 100%);

	}

	.star {
		position: relative;

		display: flex;
		justify-content: space-between;
		height: 208rpx;
		padding: 12px 0 10px 12px;
		color: red;

	}

	.cartText {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.cartText>view:nth-of-type(1) {
		margin-right: 24rpx;
		line-height: 22px;
		font-size: 19px;
		color: white;
		overflow: hidden;
		white-space: nowrap;
	}

	.cartText>view>view {
		display: flex;
		flex-direction: column;
		position: relative;
		height: 80rpx;
		justify-content: center;
		line-height: 16px;
		font-size: 13px;
		color: white;
		overflow: hidden;
		white-space: nowrap;
	}

	.starContainer {

		width: 160rpx;
		height: 160rpx;
		margin-left: 72rpx;

	}

	.starContainer {
		background-image: url("../../static/icon/star.png");
		background-position: center center;
		background-repeat: no-repeat;
		background-size: contain;
	}

	.starimg {
		background-image: url("../../static/icon/star.png");

		max-width: 100%;
		max-height: 100%;
		opacity: 0;
	}

	.circle {
		position: relative;
		display: flex;
		width: 100%;

		bottom: 200rpx;
		height: 708rpx;
	}

	.circle>view {
		display: flex;

		color: red;
		position: relative;
		overflow: hidden;
		width: 100%;
		max-width: 100%;
		max-height: 100%;

	}

	.circleContainer {
		position: absolute;
		bottom: 0;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		margin: 0;
		padding: 0 12px 10px 12px;
		height: 100%;
		width: 100%;
	}

	.moonImgContainer {
		position: relative;
		display: flex;
		overflow: hidden;
		justify-content: center;
		align-items: flex-start;
		margin: 0;
		padding-right: 0;
		padding-left: 0;

		width: 100%;
		height: 100%;
	}

	.moonImgContainer>view {
		position: absolute;

		background: url("../../static/icon/moon1.png") 0 0%/100% 100%;
		width: 460rpx;
		height: 460rpx;
		bottom: 220rpx;
		left: 64rpx;

	}

	.content {
		position: absolute;
		display: flex;
		height: 100%;
		width: 100%;
		top: 0;
		bottom: 0;
		margin-top: 400rpx;
		margin-bottom: 200rpx;
	}

	.shopList {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
	}

	.shopList>view {
		position: relative;
		display: flex;
		overflow: hidden;
		height: 100%;
		width: 100%;
		flex-direction: column;
	}

	.topList {
		position: relative;
		display: flex;
		justify-content: center;
		height: 100rpx;
		width: 100%;
	}

	.topList>view {
		position: relative;
		width: 700rpx;
		height: 100rpx;
	}

	.topList>view>view {
		position: relative;
		display: flex;
		width: 700rpx;
		height: 100rpx;
	}

	.whitebcg {
		position: relative;
		background-color: #efefef;
		border-radius: 48rpx 48rpx 0 0;
		width: 100%;
		height: 100%;
	
	}

	.whitebcg>view {
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.checkbox {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100rpx;
		margin-left: 20rpx;
	}

	.checkbox>view {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80rpx;
		height: 80rpx;
		padding: 5px;
	}

	.icon-name {
		position: relative;
		display: flex;

		width: fit-content;
		height: 100%;
		margin-left: 12rpx;
	}

	.icon-name>view {
		position: relative;
		display: flex;
		width: fit-content;
		height: 100%;
		justify-content: center;
		align-items: center;
	}

	.git-icon {
		position: relative;
		display: flex;
		width: fit-content;
		height: 100%;
		justify-content: center;
		align-items: center;
	}

	.git-icon>view {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50rpx;
		height: 50rpx;
		color: rgba(73, 80, 87, 1);
		font-size: 25px;
	}
	.shop-name{
		position: relative;
		display: flex;
		margin-left: 30rpx;
		font-size: 13px;
		
	}
	.shop-name>span{
		white-space: nowrap;
		overflow: hidden;
	}
	.arrow{
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: fit-content;
	}
	.arrow>view{
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		width: 32rpx;
		height: 32rpx;
		font-size: 32rpx;
		color: #e9721e;
		margin-left: 22rpx;
		margin-top: 6rpx;
	}
	.bottom-list{
		position: relative;
		display: flex;
		height: 100px;
		width: 100%;
	}
</style>
