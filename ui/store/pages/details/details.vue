<template>
	<view class="details">
		<my-swiper :imgList="imgList" :margin="false" :indicatorDots="false"></my-swiper>
		<view class="info-item">
			<view class="title">
				新品上市春季爆款 男士专属 假两件 帅气年轻活力
			</view>
			<view class="text-item">
				<text class="new">￥341.6</text>
				<text class="old">￥488</text>
				<text class="discount uni-tags">7折</text>
			</view>
			<view class="myflex more">
				<view class="">销量：109</view>
				<view class="">库存：4690</view>
				<view class="">浏览量：768</view>
			</view>
		</view>
		<view class="select-item">
			<view class="myflex list-cell">
				<view class="name">购买类型</view>
				<view class="funtion myflex">
					<view class="">XS 白色</view>
					<view class=""><i  class="iconfont iconright" ></i></view>
				</view>
			</view>
			<view class="myflex list-cell">
				<view class="name">优惠券</view>
				<view class="funtion myflex">
					<view class="right">领取优惠券</view>
					<view class="right"><i  class="iconfont iconright" ></i></view>
				</view>
			</view>
			<view class="myflex list-cell">
				<view class="name">购买类型</view>
				<view class="funtion">
					<view class="right">新人首单送20元无门槛代金券</view>
					<view class="right">订单满50送10</view>
					<view class="right">订单满100减30</view>
					<view class="right">单笔购买满两件免邮费</view>
				</view>
			</view>
			<view class="myflex list-cell">
				<view class="name">服务</view>
				<view class="funtion ">
					<view class="right">7天无理由退货 假一赔十</view>
				</view>
			</view>
		</view>
		<view class="comment-item">
			<view class="title-cell myflex">
				<view class="">评价（86）</view>
				<view class="">
					<text>好评率  100%</text>
					<i  class="iconfont iconright" ></i>
				</view>
			</view>
			<view class="list-cell">
				<view class="img-cell"><image :src="require('../../common/image/img6.jpg')" mode=""></image></view>
				<view class="right-cell">
					<view class="name">不再飞的鱼</view>
					<view class="content">
						商品收到 ，质量不错试了一下，刚好合身，我很喜欢，下次会再来
					</view>
					<view class="myflex other">
						<view class="type">购买类型：XL红色</view>
						<view class="time">2020-05-01 19:21</view>
					</view>
				</view>
			</view>
		</view>
		<view class="picInfo-item">
			<view class="title-cell">图文详情</view>
			<view class="img-cells">
				<view class="cell">
					<image :src="require('../../common/image/img5.jpg')" mode=""></image>
				</view>
				<view class="cell">
					<image :src="require('../../common/image/img4.jpg')" mode=""></image>
				</view>
				<view class="cell">
					<image :src="require('../../common/image/img3.jpg')" mode=""></image>
				</view>
			</view>
		</view>
		<view class="bot-bar">
			<view class="bar-item myflex">
				<view class="cell" v-for="(item,index) in btnList" :key="index">
					<view class="ixon-cell"><i  class="iconfont" :class="item.icon"  ></i></view>
					<view class="txt-cell">{{item.name}}</view>
				</view>
				<view class="btn-item">
					<view class="myflex btn-cell">
						<text class="cell-left">加入购物车</text>
						<text class="cell-center">|</text>
						<text class="cell-right" @click="ordering">去购买</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import mySwiper from '../../cpmponents/my-swiper/my-swiper.vue'
	export default {
		components:{
			mySwiper
		},
		data() {
			return {
				imgList:[
					{img:require('@/common/image/img1.jpg')},
					{img:require('@/common/image/img2.jpg')},
					{img:require('@/common/image/img3.jpg')},
				],
				btnList:[
					{name:'首页',icon:'iconcar',path:''},
					{name:'购物车',icon:'iconhome',path:''},
					{name:'收藏',icon:'iconkongxin',path:''},
				]
			}
		},
		methods: {
			ordering(){
				this.$push('order')
			}
		}
	}
</script>

<style lang="scss">
.details{
	.info-item{
		padding:10rpx 30rpx;
		.title{
			font-size: 40rpx;
		}
		.text-item{
			.new{
				color: #EA4D4F;
				font-size: 40rpx;
			}
			.old{
				text-decoration-line:line-through;
				padding: 0 16rpx;
				color: #333333;
			}
			.discount{
				margin-left: 5rpx;
				color: #ff0000;
				font-size: 36rpx;
			}
		}
		.more{
			color: #666666;
			padding: 3px 0;
		}
	}
	.select-item{
		padding-top: 20rpx;
		background-color: #F7F7F7;
		.list-cell{
			padding:0 30rpx;
			border-bottom: 2rpx solid #F7F7F7;
			background-color: #FFFFFF;
			.name{
				flex: 2;
				color: #666666;
			}
			.funtion{
				flex: 7;
				padding: 10px 0 ;
				.iconright{
					font-size: 40rpx;
				}
				.right{
					font-size: 32rpx;
					line-height: 1.8;
				}
			}
		}
	}
	.comment-item{
		padding-top: 20rpx;
		background-color: #F7F7F7;
		.title-cell{
			background-color: #FFFFFF;
			padding:0 30rpx;
			.iconright{
				font-size: 40rpx;
			}
		}
		.list-cell{
			background-color: #FFFFFF;
			display: flex;
			padding:0 30rpx;
			.img-cell{
				position: relative;
				width: 100rpx;
				height: 100rpx;
				overflow: hidden;
				border-radius: 50%;
				image{
					position: absolute;
					width: 100%;
					height: 100%;
				}
			}
			.right-cell{
				flex: 5;
				padding-left: 10rpx;
				.other{
					color: #666666;
				}
			}
		}
	}
	.picInfo-item{
		padding: 20rpx 0 160rpx;
		background-color: #F7F7F7;
		.title-cell{
			text-align: center;
			padding: 10rpx;
			background-color: #FFFFFF;
		}
		.img-cells{
			.cell{
				position: relative;
				width: 100%;
				height: 500rpx;
				overflow: hidden;
				image{
					position: absolute;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.bot-bar{
		position: fixed;
		width: 94%;
		bottom: 20rpx;
		left: 3%;
		background-color: #FFFFFF;
		border-radius: 30rpx;
		padding: 10rpx 0;
		box-shadow: 0 0 20rpx #CCCCCC;
		.bar-item{
			display: flex;
			padding-left: 10rpx;
			.cell{
				padding: 0 10px;
				.ixon-cell{
					text-align: center;
					.iconhongxin{
						font-size: 50rpx;
						line-height: 1;
						color: #EA4D4F;
					}
					.iconkongxin{
						font-size: 50rpx;
						line-height: 1;
					}
					.iconcar,.iconhome{
						font-size: 60rpx;
						line-height: 1;
					}
				}
				.txt-cell{
					flex: 5;
				}
			}
		}
		.btn-item{
			background-color: #1AAD19;
			border-radius: 100px;
			padding: 10rpx;
			line-height: 2;
			margin-right: 10rpx;
			.btn-cell{
				color: #FFFFFF;
				padding:0 10rpx;
				font-size: 36rpx;
				.cell-center{
					padding: 0 6px;
				}
			}
		}
	}
}
</style>
