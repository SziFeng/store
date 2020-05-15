<template>
	<view class="order">
		<view class="top-address myflex">
			<view class="left myflex">
				<i class="iconfont iconaddress"></i>
				<view class="text-cell">
					<view class="info">
						<text>苏子枫</text>
						<text class="tel">15219971821</text>
					</view>
					<view class="address">
						上海市虹桥机场
					</view>
				</view>
			</view>
			<view class="right"><i class="iconfont iconright"></i></view>
		</view>
		<view class="address-line"><image :src="require('../../common/image/line.png')" mode=""></image></view>
		<view class="store-item">
			<view class="title">
				<view class="img-cell"><image :src="require('../../common/image/img6.jpg')" mode=""></image></view>
				<view class="name-cell">西城小店铺</view>
			</view>
			<view class="card">
				<view class="card-cell myflex">
					<view class="card-img-cell"><image :src="require('../../common/image/img2.jpg')" mode=""></image></view>
					<view class="card-text-cell">
						<view class="info">韩版最新款 夏季防晒</view>
						<view class="info">夏季款 L</view>
						<view class="info">
							<text>￥28.9</text>
							<text>x1</text>
						</view>
					</view>
				</view>
				<view class="card-cell myflex">
					<view class="card-img-cell"><image :src="require('../../common/image/img2.jpg')" mode=""></image></view>
					<view class="card-text-cell">
						<view class="info">韩版最新款 夏季防晒</view>
						<view class="info">夏季款 L</view>
						<view class="info">
							<text>￥28.9</text>
							<text>x1</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="discount-item list-cells">
			<view class="my-list-item2s myflex">
				<view class="left-cell">
					<i></i>
					<view class="title-cell">
						优惠券
					</view>
				</view>
				<view class="right-cell">
					<view class="cont-cell">
						选择优惠券
					</view>
				</view>
			</view>
		</view>
		<view class="moreInfo-item list-cells">
			<view class="my-list-item myflex" >
				<view class="left-cell"><view class="title-cell">商品金额</view></view>
				<view class="right-cell"><view class="cont-cell">￥179.88</view></view>
			</view>
			<view class="my-list-item myflex" >
				<view class="left-cell"><view class="title-cell">优惠金额</view></view>
				<view class="right-cell"><view class="cont-cell">-￥135.12</view></view>
			</view>
			<view class="my-list-item myflex" >
				<view class="left-cell"><view class="title-cell">运费</view></view>
				<view class="right-cell"><view class="cont-cell">免运费</view></view>
			</view>
			<view class="tips-cell">
				<text>备注</text>
				<input type="text" value="" placeholder="请填写备注信息"/>
			</view>
		</view>
		<view class="summit-btn myflex">
			<view class="left">
				<text class="name-cell">实付款</text>
				<text class="money">￥475</text>
			</view>
			<view class="right">
				<view class="btn-cell">提交订单</view>
			</view>
		</view>
	</view>
</template>

<script>
	import listItem from '../../cpmponents/list-item.vue'
	export default {
		components:{
			listItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.order{
	position: absolute;
	width: 100%;
	top: 0;
	bottom:100rpx ;
	background-color: #F7F7F7;
	.top-address{
		background-color: #FFFFFF;
		padding: 10rpx 20rpx;
		.left{
			.text-cell{
				padding-left: 20rpx;
				.info{
					font-size: 38rpx;
					.tel{
						font-size: 34rpx;
						padding-left: 20rpx;
					}
				}
				.address{
					font-size: 36rpx;
					color: #666666;
				}
			}
		}
		.right{
			.iconright{
				font-size: 40rpx;
			}
		}
	}
	.address-line{
		position: relative;
		width: 100%;
		height: 6rpx;
		overflow: hidden;
		image{
			position: absolute;
			width: 100%;
			height: 6rpx;
		}
	}
	.store-item{
		background-color: #FFFFFF;
		margin-top: 20rpx;
		.title{
			display: flex;
			align-items: center;
			padding: 10rpx 20rpx;
			border-bottom: 2rpx solid #CCCCCC;
			.img-cell{
				position: relative;
				width: 70rpx;
				height: 70rpx;
				overflow: hiddren;
				border-radius: 50%;
				image{
					position: absolute;
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
			.name-cell{
				font-size: 32rpx;
				padding-left: 20rpx;
			}
		}
		.card{
			padding:10rpx 20rpx 20rpx;
			.card-cell{
				padding-top:10rpx;
				.card-img-cell{
					position: relative;
					width: 150rpx;
					height: 150rpx;
					overflow: hidden;
					border-radius:10rpx;
					image{
						position: absolute;
						width: 100%;
						height: 100%;
					}
				}
				.card-text-cell{
					flex: 5;
					padding-left: 10rpx;
				}
			}
		}
	}
	.summit-btn{
		position: fixed;
		width: 100%;
		height: 100rpx;
		bottom: 0;
		left: 0;
		background-color: #FFFFFF;
		box-shadow: 0 0 10rpx #CCCCCC;
		.left{
			padding-left: 20rpx;
			color: #666666;
			.money{
				color: #EA4D4F;
				font-size: $font-lg*1.5;
			}
		}
		.right{
			background-color: #EA4D4F;
			width: 260rpx;
			height: 100%;
			.btn-cell{
				display: flex;
				justify-content: center;
				align-items: center;
				color: #FFFFFF;
				height: inherit;
			}
		}
	}
	.discount-item{
		background-color: #FFFFFF;
		padding-left: 20rpx;
		margin-top: 20rpx;
	}
	.moreInfo-item{
		background-color: #FFFFFF;
		padding-left: 20rpx;
		margin-top: 20rpx;
		.tips-cell{
			color: $font-color-light;
			display: flex;
			align-items: center;
			padding: 10rpx;
			input{
				margin-left: 30rpx;
			}
		}
	}
	.list-cells{
		.my-list-item{
			background-color: #FFFFFF;
			padding: 10rpx;
			border-bottom: 2rpx solid $border-color-base;
			.left-cell{
				.title-cell{
					color: $font-color-light;
				}
			}
		}
		.my-list-item2{
			background-color: #FFFFFF;
			padding: 10rpx;
			.left-cell{
				.title-cell{
					color: $font-color-light;
				}
			}
		}
	}
}
</style>
