<template>

	<view>
		<link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
		<link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.3/css/all.css" rel="stylesheet">
		<view class="app">
			<view class="">
				<view class="topList">
					<view class="">
						<view class="top">
							<view class="">
								<view class="wbc-top">
									<view class="map-icon">
										<view class="">
											<view class="fas fa-map-marker-alt">

											</view>
										</view>
									</view>
									<view class="address-text">
										<view class="">
											<view class="phone-number">
												<view class="">
													<text>凯</text>
													<text>15608871854</text>
												</view>
											</view>
											<view class="address">
												<view class="">
													<text>湖北省武汉市黄陂区天河街道有力村</text>
												</view>
											</view>
											<view class="notice">
												<view class="">
													<text>收货不便时,可选择暂存服务</text>
												</view>
											</view>
										</view>
									</view>
									<view class="right-arrow">
										<view class="">
											<view class="fas fa-chevron-right">

											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
						<view class="middle">
							<view class="">
								<view class="bgc-middle">
									<view class="">
										<view class="title">
											<view class="">
												<view class="">
													<view class="shop-icon">
														<view class="fab fa-github-alt">

														</view>
													</view>
													<text class="shopName">
														小奥丁旗舰店
													</text>
												</view>

											</view>
										</view>
										<view class="goodsinfo">
											<view class="">
												<view class="">
													<view class="goods-img">
														<view class="">
															<image src="https://picsum.photos/90/90?random=1" mode="">
															</image>
														</view>
													</view>
													<view class="goods-name">
														<view class="">
															<view class="name">
															<view class="">
																<view class="">
																	<text>小奥丁双头极细眉笔 防水防汗 持久不褪色不晕染眉粉初学者女</text>
																</view>
															</view>
															</view>
															<view class="desripttions">
															<view class="">
																<view class="greybg">
																		<view class="">
																			<text>颜色分类01自然灰净含量:0.12g</text>
																		</view>
																</view>
															</view>
															</view>
															<view class="no-reason">

															</view>
														</view>
													</view>
													<view class="goods-price">

													</view>

												</view>
											</view>
										</view>
										<view class="postmethods">

										</view>
									</view>
								</view>
							</view>
						</view>
						<view class="bottom">

						</view>
					</view>
				</view>
				<view class="bottomList">

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.app {
		display: flex;
		position: relative;
		width: 100%;
		max-width: 768px;
		margin: 0 auto;
		background-color: #f2f2f2;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		top: 0;
		height: 1500rpx;
	}

	.app>view {
		display: flex;
		position: relative;
		width: 100%;
		height: 100%;
	}

	.topList {
		display: flex;
		position: relative;
		width: 100%;
		height: 1400rpx;
	}

	.bottomList {
		display: flex;
		position: fixed;
		z-index: 999;
		width: 100%;
		height: 200rpx;
		bottom: 0px;
	}

	.topList>view {
		display: flex;
		position: relative;
		width: 100%;
		height: 100%;
		flex-direction: column;
	}

	.top {
		display: flex;
		position: relative;
		width: 100%;
		height: 240rpx;
	}

	.top>view {
		display: flex;
		position: relative;
		width: 100%;
		height: 100%;
		padding: 30rpx 24rpx 30rpx 24rpx;
	}

	.wbc-top {
		display: flex;
		position: relative;
		width: 100%;
		height: 100%;
		background-color: white;
		border-radius: 24rpx;
	}

	.map-icon {
		display: flex;
		position: relative;
		height: 100%;
		width: 110rpx;
		justify-content: center;
		align-items: center;
	}

	.map-icon>view {
		display: flex;
		position: relative;
		height: 64rpx;
		width: 64rpx;
		font-size: 36rpx;
		justify-content: center;
		align-items: center;
		background-color: #3EA4F5;
		color: white;
		border-radius: 100%;

	}

	.address-text {
		display: flex;
		position: relative;
		width: 500rpx;
		height: 100%;
	}

	.address-text>view {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding: 0rpx 0 0rpx 0;
	}

	.phone-number {
		display: flex;
		width: 100%;
		height: 100%;
		flex-shrink: 0.8;

	}

	.phone-number>view {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		width: 100%;
		height: 100%;
	}

	.phone-number>view>text:nth-of-type(1) {
		max-width: 100%;
		max-height: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-right: 14rpx;
		font-size: 15px;
	}

	.phone-number>view>text:nth-of-type(2) {
		max-width: 100%;
		max-height: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 13px;
		margin-bottom: 2rpx;
		color: #A2A2A2;
	}

	.address {
		display: flex;
		width: 100%;
		height: 100%;
	}

	.address>view {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
	}

	.address>view>text {
		max-height: 100%;
		max-width: 100%;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 10px;

	}

	.notice {
		display: flex;
		width: 100%;
		height: 100%;
	}

	.notice>view {
		display: flex;
		align-items: flex-start;
		width: 100%;
		height: 100%;
		font-size: 10px;
		color: #FF5000
	}

	.right-arrow {
		display: flex;
		width: 110rpx;
		height: 100%;
		justify-content: center;
		align-items: center;
	}

	.right-arrow>view {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-right: 26rpx;
		width: 80rpx;
		height: 80rpx;
		font-size: 16px;
	}

	.right-arrow>view>view {
		max-width: 100%;
		max-height: 100%;
	}

	.middle {
		position: relative;
		display: flex;
		width: 100%;
		height: 800rpx;
	}

	.middle>view {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
		padding: 0 24rpx 0 24rpx
	}

	.bgc-middle {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.bgc-middle>view {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
	}

	.title {
		position: relative;
		display: flex;
		width: 100%;
		height: 80rpx;
	}

	.title>view {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
		background-color: #fff;
		border-radius: 24rpx 24rpx 0 0;

	}

	.title>view>view {
		position: relative;
		display: flex;
		align-items: center;

		width: 100%;
		height: 100%;
	}

	.shop-icon {

		display: flex;
		width: 60rpx;
		height: 80rpx;
		font-size: 20px;
		justify-content: center;
		align-items: center;
		margin-top: 8rpx;
		color: rgba(73, 80, 87, 1);
		margin-left: 12rpx;
	}

	.shopName {
		max-width: 100%;
		max-height: 100%;
		font-size: 13px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.goodsinfo {
		display: flex;
		position: relative;
		height: 220rpx;
		width: 100%;
		overflow: hidden;
	}

	.goodsinfo>view {
		display: flex;
		position: relative;
		height: 100%;
		width: 100%;
		background-color: white;
	}

	.goodsinfo>view>view {
		display: flex;
		position: relative;
		height: 100%;
		width: 100%;
		/* padding-top: 24rpx; */
	}

	.goods-img {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 220rpx;
	}

	.goods-img>view {
		display: flex;
		overflow: hidden;
		height: 180rpx;
		width: 180rpx;
	}

	.goods-img>view>image {
		max-width: 100%;
		max-height: 100%;
		width: 180rpx;
		height: 180rpx;
		overflow: hidden;
		border-radius: 6rpx;
	}

	.goods-name {
		display: flex;
		position: relative;
		height: 100%;
		width: 340rpx;
	}

	.goods-name>view {
		display: flex;
		position: relative;
		height: 100%;
		width: 100%;
		flex-direction: column;
		
	}

	.name {
		display: flex;
		position: relative;
		height: 100%;
		width: 100%;
		flex-shrink: 1;
	}

	.desripttions {
		display: flex;
		position: relative;
		height: 100%;
		width: 100%;
		flex-shrink: 1;
		margin-left:12rpx;
	}

	.no-reason {
		display: flex;
		position: relative;
		height: 100%;
		width: 100%;
	}
	.name>view{
		display: flex;
		height: 100%;
		width: 100%;
		padding-top:20rpx;
	}
	.name>view>view{
		display: flex;
		height: 100%;
		width: 100%;
		font-size: 12px;
		line-height: 26rpx;
	}
	.name>view>view>text{
		max-width: 100%;
		max-height: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		
	}
	.desripttions>view{
		display: flex;
		position: relative;
		height: 100%;
		width: 100%;
		padding: 4rpx;
	}
	.greybg{
		display: flex;
		position: relative;
		height: 100%;
		width: 100%;
		background-color:#FAFAFA ;
	}
	.greybg>view{
		display: flex;
		position: relative;
		height: 100%;
		width: 100%;
		padding-right:30rpx;
		font-size: 12px;
		color: #9C9C9C;
	}
	.greybg>view>text{
		display: flex;
		position: relative;
		width: 100%;
	}
</style>
