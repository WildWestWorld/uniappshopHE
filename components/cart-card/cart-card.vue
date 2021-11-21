<template>
	<view>
		<view class="bottom-list">
			<view class="">
				<view class="whiteBackground">
					<view class="">
						<view>
							<view class="bl-left">
								<view>
									<view class="goods-checkbox">
										<view>
											<u-checkbox v-model="check" shape="circle" size="50"
												icon-size="30">
											</u-checkbox>
										</view>
									</view>
		
		
									<view class="goods-img">
										<view class="">
		
										</view>
									</view>
								</view>
							</view>
							<view class="bl-right">
								
								<view class="">
									<view class="">
										<view class="delete-icon">
											<view class="fas fa-trash-alt">
												
											</view>
										</view>
										<view class="bookname">
											<view class="">
												<view class="">
													<text>{{goods.title}}</text>
												</view>
											</view>
											
										</view>
										<view class="desripttion">
											<view class="">
												<view class="d-bcg">
													<view class="">
														<view class="d-text">
															<span>这是一个描述</span>
														</view>
													</view>
												</view>
		
											</view>
										</view>
		
										<view class="priceQuantity">
											<view>
												<view class="price">
													<view class="">
														<view class="price-text" >
															<span>￥50</span>
														</view>
													</view>
												</view>
												<view class="quantity">
													<view class="">
														<view class="sub" @click="numsub">
															<view>
																<view class="sub-icon">
																	<view class="fas fa-minus">
		
																	</view>
																</view>
															</view>
														</view>
														<view class="num">
															<view>
																<view class="input">
																	<input type="text" :value="num" v-model="num">
																</view>
															</view>
														</view>
														<view class="add"  @click="numadd" >
															<view class="">
																<view class="add-icon">
																	<view class="fas fa-plus">
		
																	</view>
																</view>
															</view>
														</view>
													</view>
												</view>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"cart-card",
		goodsList:{
			type:Object
		}
		data() {
			return {
				
			};
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

	.shop-name {
		position: relative;
		display: flex;
		margin-left: 30rpx;
		font-size: 13px;

	}

	.shop-name>span {
		white-space: nowrap;
		overflow: hidden;
	}

	.arrow {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: fit-content;
	}

	.arrow>view {
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

	.bottom-list {
		position: relative;
		display: flex;
		height: 240rpx;
		width: 100%;
		bottom: 4rpx;
		min-height: 180rpx;
	}

	.bottom-list>view {
		position: absolute;
		display: flex;
		height: 100%;
		width: 100%;
		justify-content: center;
	}

	.whiteBackground {
		position: relative;
		display: flex;
		background-color: #efefef;
		width: 700rpx;
		height: 100%;
		border-radius: 0 0 48rpx 48rpx;
	}

	.whiteBackground>view {
		position: absolute;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		overflow: hidden;
		margin: 0;

		background-color: #efefef;

	}

	.whiteBackground>view>view {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
		overflow: hidden;
		margin: 12rpx 0rpx 12rpx 20rpx;
		max-width: calc(100% - 24rpx);
		justify-content: flex-start;

	}

	.bl-left {
		position: relative;
		display: flex;

		height: 100%;
		left: 0;
		right: 0;
		flex: 382;
	}

	.bl-left>view {
		position: relative;
		display: flex;
		align-items: flex-start;

		width: 100%;
		height: 100%;
	}

	.goods-img {
		position: relative;
		display: flex;
		top: 0px;
		bottom: 0px;
		left: 0px;
		right: 0px;
		width: fit-content;
		height: 100%;
		justify-content: center;
		align-items: center;
	}

	.goods-img>view {
		position: relative;
		display: flex;
		background-image: url("https://picsum.photos/125/150?random=1");
		background-repeat: no-repeat;
		background-size: cover;
		width: 180rpx;
		height: 180rpx;
		border-radius: 26rpx;

	}

	.goods-img>view>img {
		max-width: 100%;
		max-height: 100%;
		opacity: 0;
	}

	.goods-checkbox {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 90rpx;

	}

	.goods-checkbox>view {
		position: relative;
		display: flex;
		height: 50rpx;
		width: 50rpx;
	}

	.bl-right {
		position: relative;
		display: flex;

		height: 100%;
		flex: 618;
	}

	.bl-right>view {
		position: relative;
		display: flex;
		height: 100%;
		width: 100%;
		padding: 36rpx 0 20rpx 26rpx;
	}

	.bl-right>view>view {
		position: relative;
		display: flex;
		height: 100%;
		width: 100%;
		flex-direction: column;

	}

	.bookname {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
		max-width: 380rpx;
		overflow: hidden;
	}

	.desripttion {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
		max-width: 380rpx;
		overflow: hidden;
	}

	.bookname>view:first-child {
		position: relative;
		display: flex;
		width: fit-content;
		height: 100%;
	}

	.bookname>view::first-child>view {
		position: relative;
		display: flex;
		width: fit-content;
		height: 100%;
		font-size: 15px;
		line-height: 15px;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.desripttion>view {
		position: relative;
		display: flex;
		width: fit-content;
		height: 100%;
	}

	.d-bcg {
		position: relative;
		display: flex;
		width: fit-content;
		height: 100%;
	}

	.d-bcg>view {
		position: relative;
		display: flex;
		width: fit-content;
		background-color: rgba(255, 255, 255, 0.15);
		margin-bottom: 14rpx;
		margin-left: 18rpx;
	}

	.d-text {
		position: relative;
		display: flex;
		width: fit-content;
		color: rgb(153, 153, 153);
		line-height: 12px;
		font-size: 14px;
	}

	.d-text>span {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.priceQuantity {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
		max-width: 380rpx;
		overflow: hidden;
	}

	.priceQuantity>view {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: flex-start;
		align-items: center;
		padding-right: 12rpx;
	}

	.price {
		position: relative;
		display: flex;
		height: 100%;
		width: 100%;
		flex: 382;
	}

	.quantity {
		position: relative;
		display: flex;
		height: 100%;
		width: 100%;
		flex: 618;

	}

	.price>view {
		position: relative;
		display: flex;
		height: 100%;
		width: 100%;
	}

	.price-text {
		position: relative;
		display: flex;
		height: 100%;
		width: 100%;
		font-size: 14px;
		line-height: 12px;
		color: rgba(244, 67, 54, 0.8);
		align-items: center;
		justify-content: center;
		right: 24rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 140rpx;
	}

	.price-text>span {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

	}

	.quantity>view {
		position: relative;
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.sub {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		border: 4rpx solid #9e9e9e;
		border-radius: 20rpx 0 0 20rpx;
		left: 4rpx;

	}

	.num {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;

	}

	.add {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		border: 4rpx solid #9e9e9e;
		border-radius: 0 20rpx 20rpx 0;
		right: 4rpx;
	}

	.sub>view {
		position: relative;
		display: flex;
		width: 14px;
		height: 14px;
		align-items: center;
	}

	.sub-icon {
		position: relative;
		display: flex;
		overflow: hidden;
		width: 100%;
		height: 100%;
		font-size: 16px;
		color: rgba(73, 80, 87, 1);
		text-align: center;

	}

	.num>view {
		position: relative;
		display: flex;
		overflow: hidden;
		width: 100%;
		height: 100%;

	}

	.input {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		overflow: hidden;
		border: 4rpx solid #9e9e9e;
		width: 100%;
		height: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 10px;
	}

	.add>div {
		position: relative;
		display: flex;
		width: 28rpx;
		height: 28rpx;
	}

	.add-icon {

		position: relative;
		display: flex;
		overflow: hidden;
		width: fit-content;
		height: 100%;
		font-size: 16px;
		color: rgba(73, 80, 87, 1);
		text-align: center;

	}

	.compute {
		position: fixed;
		display: flex;
		z-index: 9999;
		width: 100%;
		max-width: 100%;
		height: 110rpx;
		bottom: 120rpx;
	}

	.compute>view {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		width: 100%;
		margin: 0px 26rpx 0px 26rpx;
	}

	.select-all {
		position: relative;
		display: flex;
		height: 100%;
		width: 200rpx;
		margin: 0 0 0 32rpx;

	}

	.select-all>view {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		left: 6rpx;
		height: 100%;
		width: 100%;

	}

	.allprice-check {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		height: 100%;
		width: 400rpx;
		margin: 0 12rpx 0 0;
	
	}

	.sa-checkbox {
		position: relative;
		display: flex;
		height: 100%;
		width: 100%;
	}

	.allprice-check>view {
		position: relative;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.allprice-check>view>view {
		position: relative;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	

	.total {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.total>view:nth-of-type(1) {
		font-size: 36rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		color: black;
	}

	.total>view:nth-of-type(2)>span {
		display: inline-block;
		position: relative;
		font-size: 40rpx;
		vertical-align: middle;
		white-space: nowrap;
		overflow: hidden;
		color: red;
		text-overflow: ellipsis;

	}

	.price-check {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
	
		height: 80rpx;
		width: 100%;
		color:white;
		border-radius: 40rpx;
		background-color:red ;
		text-align: center;	
		font-size: 18px;
		max-height: 92rpx;
		min-width:200rpx;
	
	
		}
		.delete-icon{
			position: absolute;
			display: flex;
			width: 60rpx;
			height: 60rpx;
			left:300rpx;
			bottom: 150rpx;
		}
		.delete-icon>view{
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			font-size: 16px;
			line-height: 12px;
			color:red;
		}
		.delete-icon>view>view{
			position: relative;
			display: flex;
			width: 100%;
			height: 100%;
			overflow: hidden;
			max-width: 100%;
			max-height: 100%;
		}
</style>
